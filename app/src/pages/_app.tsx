import type {AppProps} from "next/app";
import "@styles/reset.scss";
import "@styles/kakao.map.label.scss";
import MSWProvider from "@mocks/mockProvider";
import {queryClient} from "@libs/tanstack";
import {useState} from "react";
import {Hydrate, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import MetaHead from "@layouts/heads/MetaHead";
import {SessionProvider} from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  const [queryState] = useState(() => queryClient);

  return (
    <MSWProvider>
      <QueryClientProvider client={queryState}>
        <Hydrate state={pageProps.dehydratedState}>
          <SessionProvider>
            <MetaHead />
            <Component {...pageProps} />
          </SessionProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </MSWProvider>
  );
}
