import type {AppProps} from "next/app";
import {AppLayout} from "@layouts/AppLayout";
import '@styles/reset.scss';
import MSWProvider from "@mocks/mockProvider";

export default function App({Component, pageProps}: AppProps) {
  return (
    <MSWProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MSWProvider>
  );
}
