import React, { ReactElement, useState } from "react";
import * as styles from "./FeedLocation.css";
import useModalStore from "@store/modalStore";
import { IoAdd, IoClose } from "react-icons/io5";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Button } from "@components/common/buttons";
import { Typography } from "@components/common/typography/Typography";
import { regionDo } from "@components/filters/state/region";
import useFeedStore from "@store/feedStore";
import { FeedItem } from "@interfaces/feeds/feedPost";

export const FeedLocation = (): ReactElement => {
  const [locationItem, setLocationItem] = useState<FeedItem>({
    title: "",
    category: "",
    sigungu: "",
    dong: "",
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
        <section>
          위치
          <select
            name="sigungu"
            value={locationItem.sigungu}
            onChange={handleChange}
          >
            <option value="seoul1">서울</option>
            <option value="seoul2">서울</option>
          </select>
          <select name="dong" value={locationItem.dong} onChange={handleChange}>
            <option value="gu1">구로구</option>
            <option value="gu2">구로구</option>
          </select>
        </section>
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
