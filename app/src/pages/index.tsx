import {HomeContainer} from "@containers/HomeContainer";
import {AppLayout} from "@layouts/AppLayout";
import {ReactElement} from "react";
import {NextPage} from "next";

const HomePage: NextPage = (): ReactElement => {

  return (
    <AppLayout>
      <HomeContainer/>
    </AppLayout>
  );
}

export default HomePage;
