import {HomeContainer} from "@containers/HomeContainer";
import {AppLayout} from "@layouts/AppLayout";

export default function Home() {
  return (
    <>
      <AppLayout>
        <HomeContainer/>
      </AppLayout>
    </>
  );
}
