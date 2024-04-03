import useFeedStore from "@store/feedStore";
import React from "react";
import DaumPostcodeEmbed, {Address} from 'react-daum-postcode';
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {KakaoAddressDocument} from "@interfaces/kakao";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_REST_KEY;

export const KakaoAddressSearch = () => {
  const {setFeedItem, item} = useFeedStore();

  const handleComplete = (data: Address) => {
    let fullAddress = data.address;
    let extraAddress = '';

    const headers = {
      'content-type': "application/json;charset=UTF-8",
      'Authorization': `KakaoAK ${kakaoAppKey}`
    }
    const url = `https://dapi.kakao.com/v2/local/search/address?query=${data.address}`;
    axios.get<AxiosRequestConfig, AxiosResponse<{ documents: KakaoAddressDocument[] }>>(url, {
      headers
    }).then(res => {
      const {documents} = res.data;
      if (documents.length > 0) {
        const {address} = documents[0];
        const {address_name, region_1depth_name, region_2depth_name, x, y} = address;
        const addressData = {
          name: address_name,
          sigungu: region_1depth_name,
          sido: region_2depth_name,
          x,
          y
        }

        setFeedItem({
          ...item,
          address: addressData
        })
      }
    })
    console.log(data)
  };

  return (
    <div>
      <DaumPostcodeEmbed onComplete={handleComplete}/>
    </div>
  )
}
