import React, {ReactElement, useState} from "react";
import * as styles from "./FeedLocation.css";
import useModalStore from "@store/modalStore";
import {IoAdd, IoClose, IoLocate} from "react-icons/io5";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Button} from "@components/common/buttons";
import {Typography} from "@components/common/typography/Typography";
import useFeedStore from "@store/feedStore";
import {FeedItem} from "@interfaces/feeds/feedPost";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {KakaoAddress, KakaoAddressDocument} from "@interfaces/kakao";
import {primaryIconColor} from "@styles/theme.css";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_REST_KEY;

export const FeedLocation = (): ReactElement => {
  const [locationItem, setLocationItem] = useState<FeedItem>({
    title: "",
    category: "",
    address: {
      name: '',
      sigungu: '',
      sido: '',
      x: '',
      y: '',
    }
  });
  const { setIsOpen, setModalType } = useModalStore();
  const { setFeedItem } = useFeedStore();

  const handleClickLocationForm = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const handleClickSendLocationData = () => {
    setFeedItem(locationItem);
    handleClickLocationForm();
  };

  const handleClickAddress = () => {
    const daum: any = (window as any).daum;
    new daum.Postcode({
      oncomplete: function (addressInfo: KakaoAddress): void {
        const { address } = addressInfo;
        const headers = {
          'content-type': "application/json;charset=UTF-8",
          'Authorization': `KakaoAK ${kakaoAppKey}`
        }
        const url = `https://dapi.kakao.com/v2/local/search/address?query=${address}`;
        axios.get<AxiosRequestConfig, AxiosResponse<{documents: KakaoAddressDocument[]}>>(url, {
          headers
        }).then(res => {
          const { documents } = res.data;
          if (documents.length > 0) {
            const {address} = documents[0];
            const { address_name, region_1depth_name, region_2depth_name, x, y } = address;
            const addressData = {
              name: address_name,
              sigungu: region_1depth_name,
              sido: region_2depth_name,
              x,
              y
            }

            setLocationItem({
              ...locationItem,
              address: addressData
            })
          }
        })
      },
      onresize : function (size: number): void {},
      width : '100%',
      height : '100%',
    }).open();
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setLocationItem({
      ...locationItem,
      [name]: value,
    });
  };

  return (
    <div className={styles.feedLocationLaoyout}>
      <FlexBox justifyContent="flex-end" alignItems="flex-end">
        <button type="button" onClick={handleClickLocationForm}>
          <IoClose size={24} color={"#FF7101"} />
        </button>
      </FlexBox>
      <div className={styles.feedLocationContainer}>
        <section>
          <label>
            이름
            <input
              name="title"
              value={locationItem.title}
              onChange={handleChange}
              className={styles.input}
              type="text"
            />
          </label>
        </section>
        <section>
          카테고리
          <select
            name="category"
            value={locationItem.category}
            onChange={handleChange}
          >
            <option value={"양식1"}>양식</option>
            <option value={"양식2"}>양식</option>
          </select>
        </section>

        <FlexBox justifyContent={"flex-start"} alignItems={"flex-start"}>
          <Button
            variant={"icon"}
            onClick={handleClickAddress}
          >
            <FlexBox direction="row" gap={8}>
              <IoLocate size={24} color={primaryIconColor} />
              <Typography as={"span"} color="primary">
                주소 검색
              </Typography>
            </FlexBox>
          </Button>
          <label className={styles.feedLocationContainer}>
            <input
              disabled={true}
              readOnly={true}
              value={locationItem.address.name}
              className={styles.input}
              type="text"
            />
          </label>
        </FlexBox>



      </div>
      <FlexBox>
        <Button
          borderRadius={10}
          width={200}
          onClick={handleClickSendLocationData}
        >
          <FlexBox direction="row" gap={8}>
            <IoAdd size={24} color={"#fff"} />
            <Typography as={"span"} color="white000">
              직접 등록
            </Typography>
          </FlexBox>
        </Button>
      </FlexBox>
    </div>
  );
};
