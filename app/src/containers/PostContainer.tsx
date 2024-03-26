import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { FeedPost } from "@components/feeds/FeedPost";
import { Avatar } from "@components/ui";
import Image from "next/image";
import { FormEventHandler, ReactElement, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import * as styles from "./PostContainer.css";
import { FileUploadButton } from "@components/common/buttons/FileUploadButton";
import { Button } from "@components/common/buttons";
import { useRouter } from "next/router";
import { FeedPostBody } from "@interfaces/feeds/feedPost";
import { feedSubmitApi } from "@apis/feeds";

export const FeedPostContainer = (): ReactElement => {
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const [postForm, setPostForm] = useState<FeedPostBody>({
    content: "",
    items: {
      name: "",
      description: "",
      location: "",
      thumbnail: "",
    },
    files: [],
  });
  const router = useRouter();

  const handleChangeFile = (previewUrls: string[], fileList: File[]) => {
    setPreviewUrl(previewUrls);
    setPostForm({
      ...postForm,
      files: fileList,
    });
  };

  const onChangeTextarea = (content: string) => {
    setPostForm({
      ...postForm,
      content,
    });
  };

  const handleSubmitFeedPost: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      alert("저장");
      await feedSubmitApi(postForm);
    } catch (e) {
      alert("error");
    }
  };

  return (
    <form onSubmit={handleSubmitFeedPost} className={styles.postLayout}>
      <FlexBox
        height={56}
        justifyContent="space-between"
        className={styles.feedListsTitle}
        direction="row"
      >
        <button type="button" onClick={() => router.back()}>
          <Typography color="primary" as="span" fontSize={14}>
            취소
          </Typography>
        </button>
        <Button type="submit">
          <Typography as="span" fontSize={12} color={"white000"}>
            포스팅
          </Typography>
        </Button>
      </FlexBox>

      <div className={styles.postLayout}>
        <FlexBox
          className={styles.postBodyContainer}
          direction="row"
          alignItems="flex-center"
          justifyContent="flex-start"
        >
          <Avatar alt={"dahoon"} src={"/images/dh.png"} />
          <FeedPost onChangeTextarea={onChangeTextarea} />
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
    </form>
  );
};
