import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { FeedPost } from "@components/feeds/FeedPost";
import { Avatar } from "@components/ui";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import * as styles from "./PostContainer.css";
import { FileUploadButton } from "@components/buttons/FileUploadButton";

export const FeedPostContainer = (): ReactElement => {
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);

  const handleChangeFile = (previewUrls: string[], fileList: File[]) => {
    setPreviewUrl(previewUrls);
  };

  return (
    <div className={styles.postLayout}>
      <FlexBox
        className={styles.postBodyContainer}
        direction="row"
        alignItems="flex-center"
        justifyContent="flex-start"
      >
        <Avatar alt={"dahoon"} src={"/images/dh.png"} />
        <FeedPost />
      </FlexBox>

      <FlexBox
        direction="row"
        justifyContent="space-between"
        className={styles.postOptionContainer}
      >
        <FileUploadButton onFileChange={handleChangeFile} />
        <FlexBox direction="row" justifyContent="flex-end" gap={4}>
          <FiMapPin color={"#FF7101"} />
          <Typography color="primary" as="span" fontSize={14}>
            장소
          </Typography>
        </FlexBox>
      </FlexBox>
      <div className={styles.imagesContainer}>
        {previewUrl.map((url, index) => (
          <Image
            width={40}
            height={40}
            key={index}
            src={url}
            alt={`Preview ${index}`}
            className={styles.images}
          />
        ))}
      </div>
    </div>
  );
};
