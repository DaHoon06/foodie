import useModalStore from "@store/modalStore";
import {ModalHandler} from "@components/common/modal/ModalHandler";
import {SignInAlertBox} from "@components/common/alert-box/SignInAlertBox";

export const ModalContainer = () => {
  const {type} = useModalStore();
  return (
    <>
      <div id="modal"/>
      <ModalHandler>
        {type === 'signInAlertBox' && <SignInAlertBox/>}
      </ModalHandler>
    </>
  )
}
