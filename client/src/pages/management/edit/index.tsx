import FlexBox from "@components/common/headless/flex-box/FlexBox";
import { BasicLayout } from "@layouts/BasicLayout";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ChangeEvent, ReactElement, useRef, useState } from "react";
import { Typography } from "@components/common/typography/Typography";
import * as styles from "@styles/pages/management/ProfileEdit.css";
import { MdCameraAlt, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";
import BasicInput from "@components/common/inputs/BasicInput";
import { getUserProfileApi, profileUpdateApi } from "@apis/users/user.api";
import { getSession } from "next-auth/react";
import { User } from "@interfaces/users/user";
import { FileUploadButton } from "@components/common/buttons/FileUploadButton";
import { axiosInstance } from "@libs/axios";
import { FaUser } from "react-icons/fa6";

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
      //todo 용량 초과 알람 주기
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
      const formData = new FormData();
      files.forEach((file) => {
        formData.append(`files`, file);
      });
      const headers = {
        "Content-Type": "multipart/form-data",
      };

      try {
        await axiosInstance.post(
          `/files/upload/profile/${user.creatorId}`,
          formData,
          {
            headers,
          }
        );
      } catch (e) {
        console.log(e);
      }

      if (data && data.result) {
        await router.push("/management");
      }
    } catch (e) {
      console.log(e);
    }
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
          {previewUrls.length === 0 && user.files.length > 0 ? (
            <>
              <Image
                width={120}
                height={110}
                priority={true}
                src={user.files[0].path1}
                alt={`Preview`}
                className={styles.profileImage}
              />
            </>
          ) : previewUrls.length > 0 ? (
            <>
              {previewUrls.map((url, index) => (
                <Image
                  width={120}
                  height={110}
                  key={index}
                  priority={true}
                  src={url}
                  alt={`Preview ${index}`}
                  className={styles.profileImage}
                />
              ))}
            </>
          ) : (
            <div className={styles.profileIcon}>
              <FaUser color="#b7b7b7" size={46} />
            </div>
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
