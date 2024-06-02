import { Button } from "@components/common/buttons";
import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { Typography } from "@components/common/typography/Typography";
import { BasicLayout } from "@layouts/BasicLayout";
import { useRouter } from "next/router";
import { FormEventHandler, ReactElement, useEffect, useState } from "react";
import * as styles from "@styles/pages/feeds/FeedEditPage.css";
import { Avatar } from "@components/common/ui";
import Image from "next/image";
import { FeedPostBody, FeedUser } from "@interfaces/feeds/feed.post";
import { feedDetailApi, feedSubmitApi } from "@apis/feeds/feed.api";
import useModalStore from "@store/modalStore";
import useFeedStore from "@store/feedStore";
import { IoTrashOutline } from "react-icons/io5";
import { axiosInstance } from "@libs/axios";
import { Textarea } from "@components/common/textarea/Textarea";
import { queryClient } from "@libs/tanstack";
import { queryKeys } from "@services/keys/queryKeys";
import { User } from "@interfaces/users/user";
import { FileUploadButton } from "@components/common/buttons/FileUploadButton";
import { FiMapPin } from "react-icons/fi";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { FeedDetailSate } from "@interfaces/feeds/feed.lists";

interface Props {
  feed: FeedDetailSate;
}

const FeedEditPage = (props: Props): ReactElement => {
  const { feed } = props;
  const { feedId, feedContent, feedCreatedDate, user, shop, files } = feed;

  const { setIsOpen, setModalType } = useModalStore();
  const { item, setFeedItem } = useFeedStore();
  const [previewUrl, setPreviewUrl] = useState<string[]>([]);
  const [postForm, setPostForm] = useState<FeedPostBody>({
    content: feedContent,
    item: {
      title: shop.shopName,
      category: shop.shopCategory,
      address: {
        name: shop.shopName,
        sigungu: shop.shopAddress.sigungu,
        sido: shop.shopAddress.sido,
        x: shop.shopAddress.x,
        y: shop.shopAddress.y,
      },
    },
    files: [],
  });
  const router = useRouter();

  useEffect(() => {
    const item = {
      title: shop.shopName,
      category: shop.shopCategory,
      address: {
        name: shop.shopName,
        sigungu: shop.shopAddress.sigungu,
        sido: shop.shopAddress.sido,
        x: shop.shopAddress.x,
        y: shop.shopAddress.y,
      },
    };
    setFeedItem(item);
  }, [props]);

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
    <BasicLayout>
      <form className={styles.postLayout}>
        <FlexBox
          className={styles.feedListsTitle}
          height={56}
          justifyContent="space-between"
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
              수정
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
              <div className={styles.avatarWrapper}>
                <Avatar
                  alt={`${user.nickname}_profile_image`}
                  src={user.profileImage}
                />
              </div>

              <Textarea
                value={feedContent}
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
    </BasicLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  query,
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ feed: any }>
> => {
  try {
    const { feedId } = query as { feedId: string };
    const data = await feedDetailApi(feedId);
    if (!feedId || !data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: {
        feed: data,
      },
    };
  } catch (e) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};

export default FeedEditPage;
