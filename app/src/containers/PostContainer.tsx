import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { FeedPost } from "@components/feeds/FeedPost";
import { Avatar } from "@components/ui";
import Image from "next/image";
import { FormEventHandler, ReactElement, useEffect, useState } from "react";
import { FiMapPin } from "react-icons/fi";
import * as styles from "./PostContainer.css";
import { FileUploadButton } from "@components/common/buttons/FileUploadButton";
import { Button } from "@components/common/buttons";
import { useRouter } from "next/router";
import { FeedPostBody, FeedUser } from "@interfaces/feeds/feed.post";
import { feedSubmitApi } from "@apis/feeds/feed.api";
import { useSession } from "next-auth/react";
import useModalStore from "@store/modalStore";
import useFeedStore from "@store/feedStore";
import { IoTrashOutline } from "react-icons/io5";
import { axiosInstance } from "@libs/axios";

export const FeedPostContainer = (): ReactElement => {
  const { setIsOpen, setModalType } = useModalStore();
  const { item, setFeedItem } = useFeedStore();
  const { data: session } = useSession();
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const [postForm, setPostForm] = useState<FeedPostBody>({
    content: "",
    item: {
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
    },
    files: [],
  });
  const router = useRouter();

  useEffect(() => {
    setPostForm({
      ...postForm,
      item,
    });
  }, [item]);

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

  const fileUpload = async (postId: string) => {
    const { files } = postForm;
    const formData = new FormData();

    files.forEach((file) => {
      formData.append(`files`, file);
    });
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    try {
      await axiosInstance.post(`/files/upload/${postId}`, formData, {
        headers,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitFeedPost: FormEventHandler<HTMLFormElement> = async (e) => {
    try {
      e.preventDefault();
      const userSession = session as unknown as FeedUser;
      const user = {
        username: userSession.username,
        id: userSession.id,
      };
      const body = {
        user,
        ...postForm,
      };
      await fileUpload("postId");
      const { data } = await feedSubmitApi(body);
      if (data.result) {
        //todo 만약 파일이 있으면?
        if (postForm.files.length > 0) {
          const { _id } = data.data;
          await fileUpload(_id);
        }
        await router.push("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickLocation = async () => {
    setModalType("registerShop");
    setIsOpen(true);
  };

  const handleClickRemoveLocationData = () => {
    setFeedItem({
      title: "",
      category: "",
      address: {
        name: "",
        sigungu: "",
        sido: "",
        x: "",
        y: "",
      },
    });
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
        <div>
          <FlexBox
            className={styles.postBodyContainer}
            direction="row"
            alignItems="flex-center"
            justifyContent="flex-start"
          >
            <Avatar alt={"dahoon"} src={"/images/dh.png"} />
            <FeedPost onChangeTextarea={onChangeTextarea} />
          </FlexBox>
          {postForm.item.title.length > 0 && (
            <div className={styles.locationItemContainer}>
              <div className={styles.locationItemBox}>
                <FlexBox
                  direction={"row"}
                  justifyContent={"space-between"}
                  gap={2}
                >
                  <FlexBox
                    justifyContent={"flex-start"}
                    alignItems={"flex-start"}
                  >
                    <Typography fontSize={14} fontWeight={500}>
                      {item.title}
                    </Typography>
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {item.category}
                    </Typography>
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {item.address.sido} / {item.address.sigungu}
                    </Typography>
                    <Typography
                      color={"gray400"}
                      fontSize={14}
                      fontWeight={300}
                    >
                      {item.address.name}
                    </Typography>
                  </FlexBox>

                  <Button
                    className={styles.removeLocationButton}
                    variant={"icon"}
                    onClick={handleClickRemoveLocationData}
                  >
                    <IoTrashOutline size={24} color={"#d3d3d3"} />
                  </Button>
                </FlexBox>
              </div>
            </div>
          )}
        </div>

        <div>
          <FlexBox
            direction="row"
            justifyContent="space-between"
            className={styles.postOptionContainer}
          >
            <FileUploadButton onFileChange={handleChangeFile} />

            <button type={"button"} onClick={handleClickLocation}>
              <FlexBox direction="row" justifyContent="flex-end" gap={4}>
                <FiMapPin color={"#FF7101"} />
                <Typography color="primary" as="span" fontSize={14}>
                  장소
                </Typography>
              </FlexBox>
            </button>
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
      </div>
    </form>
  );
};
