import {HomeContainer} from "@containers/HomeContainer";
import {AppLayout} from "@layouts/AppLayout";
import {useRouter} from "next/router";
import {useEffect} from "react";
import useModalStore from "@store/modalStore";

export default function Home() {
  const router = useRouter();
  const {setIsOpen, setModalType} = useModalStore();
  useEffect(() => {
    if (router.query) {
      const {login} = router.query as { login: string };
      if (login === "required") {
        router.replace('/')
        setModalType('signInAlertBox');
        setIsOpen(true);
      }

    }

  }, [router.query]);
  return (
    <>
      <AppLayout>
        <HomeContainer/>
      </AppLayout>
    </>
  );
}
