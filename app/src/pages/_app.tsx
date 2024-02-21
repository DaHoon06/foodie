import type {AppProps} from "next/app";
import {AppLayout} from "@layouts/AppLayout";
import '@styles/reset.scss';
import MSWProvider from "@mocks/mockProvider";
import {queryClient} from "@libs/tanstack";
import {useState} from "react";
import {Hydrate, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export default function App({Component, pageProps}: AppProps) {
  const [queryState] = useState(() => queryClient);
  return (
    <MSWProvider>
      <QueryClientProvider client={queryState}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
          <ReactQueryDevtools initialIsOpen={false}/>
        </Hydrate>
      </QueryClientProvider>
    </MSWProvider>
  );
}
