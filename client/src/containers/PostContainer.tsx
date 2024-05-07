import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
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
import { Textarea } from "@components/common/textarea/Textarea";
import { queryClient } from "@libs/tanstack";
import { queryKeys } from "@services/keys/queryKeys";
import { User } from "@interfaces/users/user";

interface Props {
  user: User;
}

export const FeedPostContainer = (props: Props): ReactElement => {
  const { user } = props;
  const { setIsOpen, setModalType } = useModalStore();
  const { item, setFeedItem } = useFeedStore();
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

      const body = {
        ...postForm,
      };
      const { data } = await feedSubmitApi(body);
      if (data.result) {
        if (postForm.files.length > 0) {
          const { _id } = data.data;
          await fileUpload(_id);
        }

        await queryClient.invalidateQueries([
          queryKeys.feeds.lists,
          queryKeys.maps.marker,
        ]);
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
        <Button type="submit" width={54} height={30}>
          <Typography
            as="span"
            fontSize={14}
            color={"white000"}
            fontWeight={300}
          >
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
            <Avatar alt={"dahoon"} src={user.profileImage} />
            <Textarea
              placeholder={"여러분의 이야기를 들려주세요."}
              onChangeTextarea={onChangeTextarea}
            />
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
