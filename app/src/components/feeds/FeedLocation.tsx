import React, {ReactElement, useState} from "react";
import * as styles from "./FeedLocation.css";
import useModalStore from "@store/modalStore";
import {IoAdd, IoClose, IoLocate, IoLocation} from "react-icons/io5";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {Button} from "@components/common/buttons";
import {Typography} from "@components/common/typography/Typography";
import useFeedStore, {LocationState} from "@store/feedStore";
import {KakaoAddressMap} from "@components/kakao/maps/KakaoAddressMap";
import {KakaoAddressSearch} from "@components/kakao/KakaoAddressSearch";
import {BorderSelectBox} from "@components/common/select-box";
import {primaryIconColor} from "@styles/theme.css";
import classNames from "classnames";


const categories = [
  {label: '한식', key: '한식'},
  {label: '카페/디저트', key: '카페/디저트'},
  {label: '중식', key: '분식'},
  {label: '샌드위치', key: '샌드위치'},
  {label: '샐러드', key: '샐러드'},
  {label: '회/초밥', key: '회/초밥'},
  {label: '버거', key: '버거'},
  {label: '일식/돈까스', key: '일식/돈까스'},
  {label: '양식/피자', key: '양식/피자'},
  {label: '아시안', key: '아시안'},
  {label: '고기/구이', key: '고기/구이'},
  {label: '찜/탕', key: '찜/탕'},
  {label: '족발/보쌈', key: '족발/보쌈'},
  {label: '야식', key: '야식'},
  {label: '도시락/죽', key: '도시락/죽'},
]

export const FeedLocation = (): ReactElement => {
  const {setIsOpen, setModalType} = useModalStore();
  const [locationData, setLocationData] = useState<LocationState>({title: '', category: '한식',});
  const {setFeedItem, item} = useFeedStore();
  const [locationType, setLocationType] = useState('map');

  const handleClickLocationForm = () => {
    setIsOpen(false);
    setModalType(null);
  };

  const handleClickSendLocationData = () => {
    setFeedItem({
      ...item,
      ...locationData,
    });
    handleClickLocationForm();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name, value} = e.target;
    setLocationData({
      ...locationData,
      [name]: value,
    });
  };

  const onChangeCategorySelectBox = (value: string) => {
    setLocationData({
      ...locationData,
      category: value,
    })
  }

  return (
    <div className={styles.feedLocationLaoyout}>
      <FlexBox justifyContent="flex-end" alignItems="flex-end">
        <button type="button" onClick={handleClickLocationForm}>
          <IoClose size={24} color={"#FF7101"}/>
        </button>
      </FlexBox>

      <FlexBox direction={'row'} alignItems={"flex-start"} justifyContent={"flex-start"} gap={20}>
        <Button variant={"icon"}
                onClick={() => setLocationType('map')}>
          <IoLocation color={primaryIconColor} size={20}/>
          <Typography as={'span'} color={"primary"}>지도로 검색</Typography>
        </Button>
        <Button
          variant={"icon"}
          onClick={() => setLocationType('address')}
        >
          <IoLocate color={primaryIconColor} size={20}/>
          <Typography as={'span'} color={"primary"}>주소로 검색</Typography>
        </Button>
      </FlexBox>

      <FlexBox className={classNames(styles.locationItemWrapper)} alignItems={"flex-start"} gap={8}>
        <Typography color={"gray500"} fontSize={14} fontWeight={500}>카테고리</Typography>
        <div>
          <BorderSelectBox items={categories} onChange={onChangeCategorySelectBox} />
        </div>
      </FlexBox>

      <section className={classNames(styles.locationItemWrapper)}>
        <FlexBox justifyContent={"flex-start"} alignItems={'flex-start'} gap={8}>
          <Typography color={"gray500"} fontSize={14} fontWeight={500}>이름</Typography>
          <input
            name="title"
            value={locationData.title}
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder={'방문한 장소의 이름을 입력해주세요.'}
          />
        </FlexBox>
      </section>

      <section className={styles.addressSearchContainer}>
        {locationType === 'address' ? (
          <KakaoAddressSearch/>
        ) : (
          <KakaoAddressMap/>
        )}
      </section>

      <label className={styles.feedLocationContainer}>
        <input
          disabled={true}
          readOnly={true}
          value={item.address.name}
          className={styles.fullAddressInput}
          type="text"
          placeholder={'전체 주소'}

        />
      </label>

      <FlexBox>
        <Button
          borderRadius={4}
          width={200}
          onClick={handleClickSendLocationData}
        >
          <FlexBox direction="row" gap={8}>
            <IoAdd size={24} color={"#fff"}/>
            <Typography as={"span"} color="white000">
              직접 등록
            </Typography>
          </FlexBox>
        </Button>
      </FlexBox>
    </div>
  );
};


