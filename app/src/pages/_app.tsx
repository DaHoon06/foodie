import type {AppProps} from "next/app";
import {AppLayout} from "@layouts/AppLayout";
import '@styles/reset.scss';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  import('../mocks');
}

export default function App({Component, pageProps}: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
