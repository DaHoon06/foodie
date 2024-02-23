import {HomeContainer} from "@containers/HomeContainer";
import {AppLayout} from "@layouts/AppLayout";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (router.query) {
      const {login} = router.query as { login: string };
      if (login === "required") {
        alert('로그인이 필요합니다.');
        router.replace('/')
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
