import useModalStore from "@store/modalStore";
import {ModalHandler} from "@components/common/modal/ModalHandler";
import {SignInAlertBox} from "@components/alert-box/SignInAlertBox";

export const ModalContainer = () => {
  const {type} = useModalStore();
  return (
    <ModalHandler>
      {type === 'signInAlertBox' && <SignInAlertBox/>}
    </ModalHandler>
  )
}