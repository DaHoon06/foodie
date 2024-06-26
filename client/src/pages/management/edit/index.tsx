import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { BasicLayout } from "@layouts/BasicLayout";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ChangeEvent, ReactElement, useRef, useState } from "react";
import { Typography } from "@components/common/typography/Typography";
import * as styles from "@styles/pages/management/ProfileEdit.css";
import { MdCameraAlt, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import BasicInput from "@components/common/inputs/BasicInput";
import { getUserProfileApi, profileUpdateApi } from "@apis/users/user.api";
import { getSession } from "next-auth/react";
import { User } from "@interfaces/users/user";
import { axiosInstance } from "@libs/axios";
import { Avatar } from "@components/common/ui";
import { imageUploadApi } from "@apis/files/upload.api";

interface Props {
  user: User;
}

const maxSize = 5 * 1024 * 1024; // 5MB

const ProfileEditPage = (props: Props): ReactElement => {
  const { user } = props;
  const router = useRouter();
  const [files, setFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const fileInput = useRef<HTMLInputElement | null>(null);
  const [profileUpdateState, setProfileUpdateState] = useState({
    description: user.description,
    nickname: user.nickname,
  });

  const handleClickHistoryBack = () => {
    router.back();
  };

  const handleClickUploadButton = () => {
    fileInput.current?.click();
  };

  const handleChangeFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.persist();

    const fileList = Array.from(e.target.files || []).slice(0, 9);

    if (!fileList) return;

    const oversizedFiles = fileList.filter((file) => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      return;
    }

    setFiles(fileList);

    const urls = fileList.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleChangeTextarea = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProfileUpdateState({
      ...profileUpdateState,
      [name]: value,
    });
  };

  const handleClickProfileUpdate = async () => {
    try {
      const body = {
        ...profileUpdateState,
      };
      const data = await profileUpdateApi(body);

      if (files.length > 0) {
        await profileImageUpload();
      }

      if (data && data.result) {
        await router.push("/management");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const profileImageUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append(`files`, file);
    });
    await imageUploadApi(formData);
  };

  return (
    <BasicLayout>
      <FlexBox
        direction={"row"}
        justifyContent={"space-between"}
        height={56}
        className={styles.profileEditTopLayout}
      >
        <button
          aria-label={"exit-profile-editor-button"}
          type={"button"}
          onClick={handleClickHistoryBack}
        >
          <MdOutlineKeyboardArrowLeft size={24} color={"#d0d0d0"} />
        </button>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}
        >
          프로필 수정
        </Typography>
        <button
          aria-label={"profile-editor-save-button"}
          type={"button"}
          onClick={handleClickProfileUpdate}
        >
          <Typography
            as={"span"}
            color={"primary"}
            fontSize={14}
            fontWeight={500}
          >
            저장
          </Typography>
        </button>
      </FlexBox>

      <div className={styles.profileEditorLayout}>
        <section className={styles.profileImageImageBox}>
          {previewUrls.length === 0 ? (
            <div className={styles.profileImage}>
              <Avatar
                src={user.profileImage}
                alt={`${user.username}_profile_image`}
              />
            </div>
          ) : (
            <>
              {previewUrls.map((url, index) => (
                <div key={user.username} className={styles.profileImage}>
                  <Avatar src={url} alt={`${user.username}_profile_image`} />
                </div>
              ))}
            </>
          )}

          <div className={styles.profileImageEditButtonWrapper}>
            <button
              className={styles.profileImageEditButton}
              onClick={handleClickUploadButton}
              aria-label={"profile-image-update-button"}
            >
              <MdCameraAlt size={20} color={"#2D2D2D"} />
            </button>
            <input
              type={"file"}
              onChange={handleChangeFileUpload}
              style={{ display: "none" }}
              ref={fileInput}
              name="images"
              accept=".jpg, .jpeg, .png"
            />
          </div>
        </section>
        <section className={styles.profileEditorContainer}>
          <BasicInput
            label={"닉네임"}
            name={"nickname"}
            value={profileUpdateState.nickname}
            onChange={handleChangeTextarea}
          />

          <FlexBox alignItems={"flex-start"} gap={10}>
            <label>
              <Typography fontWeight={400} color={"gray500"} fontSize={14}>
                소개 문구
              </Typography>
            </label>
            <div className={styles.editTextareaWrapper}>
              <textarea
                className={styles.editTextarea}
                placeholder={
                  profileUpdateState.description
                    ? profileUpdateState.description
                    : "자기 소개 문구를 작성해주세요."
                }
                name={"description"}
                onChange={handleChangeTextarea}
              ></textarea>
            </div>
          </FlexBox>
        </section>
      </div>
    </BasicLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  try {
    const session = await getSession(ctx);
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    const id = session.id;
    const axiosResult = await getUserProfileApi(id);
    const { data } = axiosResult;
    return {
      props: {
        user: data,
      },
    };
  } catch (e) {
    return {
      props: {
        user: null,
      },
    };
  }
};

export default ProfileEditPage;
