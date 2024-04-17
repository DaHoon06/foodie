import FlexBox from "@components/common/headless/flex-box/FlexBox";
import {BasicLayout} from "@layouts/BasicLayout";
import {NextPage} from "next";
import {ChangeEvent, ReactElement} from "react";
import {Typography} from "@components/common/typography/Typography";
import * as styles from '@styles/pages/management/ProfileEdit.css';
import {MdCameraAlt, MdOutlineKeyboardArrowLeft} from "react-icons/md";
import {useRouter} from "next/router";
import Image from "next/image";
import BasicInput from "@components/common/inputs/BasicInput";

const ProfileEditPage: NextPage = (): ReactElement => {
  const router = useRouter();

  const handleClickHistoryBack = () => {
    router.back()
  }
  
  const handleClickProfileImageEdit = () => {
    alert('이미지 변경하자')
  }

  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    console.log(e)
  }
  const handleClickProfileUpdate = async () => {
    try {
      alert('저장 뾰로롱')
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <BasicLayout>
      <FlexBox direction={"row"} justifyContent={"space-between"} height={56} className={styles.profileEditTopLayout}>
        <button aria-label={'exit-profile-editor-button'} type={'button'} onClick={handleClickHistoryBack}>
          <MdOutlineKeyboardArrowLeft  size={24} color={"#d0d0d0"} />
        </button>
        <Typography
          variant={"h1"}
          letterSpacing={"-0.5"}
          fontSize={16}
          fontWeight={500}>
          프로필 수정
        </Typography>
        <button aria-label={'profile-editor-save-button'} type={'button'} onClick={handleClickProfileUpdate}>
          <Typography as={"span"} color={'primary'} fontSize={14} fontWeight={500}>저장</Typography>
        </button>
      </FlexBox>
     
      <div className={styles.profileEditorLayout}>
        <section className={styles.profileImageImageBox}>
          <Image
            className={styles.profileImage}
            src={"/images/dh.png"}
            alt={"profile_image"}
            priority={true}
            width={120}
            height={110}
          />
          <div className={styles.profileImageEditButtonWrapper}>
            <button className={styles.profileImageEditButton} onClick={handleClickProfileImageEdit} aria-label={'profile-image-update-button'}>
              <MdCameraAlt size={20} color={'#2D2D2D'} />
            </button>
          </div>
        </section>
        <section className={styles.profileEditorContainer}>
          <BasicInput label={'닉네임'} />

          <FlexBox alignItems={"flex-start"} gap={10}>
            <label><Typography fontWeight={400} color={'gray500'} fontSize={14}>소개 문구</Typography></label>
            <div className={styles.editTextareaWrapper}>
            <textarea
              className={styles.editTextarea}
              placeholder="자기소개뾰로롱"
              onChange={handleChangeTextarea}
            ></textarea>
            </div>
          </FlexBox>
        </section>
      </div>
    </BasicLayout>
  );
};

export default ProfileEditPage;
