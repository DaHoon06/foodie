import type {AppContext, AppInitialProps, AppProps} from "next/app";
import "@styles/reset.scss";
import "@styles/kakao.map.label.scss";
import MSWProvider from "@mocks/mockProvider";
import {queryClient} from "@libs/tanstack";
import {useState} from "react";
import {dehydrate, Hydrate, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import MetaHead from "@layouts/heads/MetaHead";
import {getSession, SessionProvider} from "next-auth/react";
import AuthProvider from "@providers/AuthProvider";
import {NextComponentType} from "next";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }) => {
  const {session} = pageProps;
  const [queryState] = useState(() => queryClient);

  return (
    <MSWProvider>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryState}>
          <Hydrate state={pageProps.dehydratedState}>
              <AuthProvider>
                <MetaHead />
                <Component {...pageProps} />
                {/* <ServerEventHandler /> */}
              </AuthProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </SessionProvider>
    </MSWProvider>
  );
}



App.getInitialProps = async ({
                               Component,
                               ctx,
                             }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {} as any;
  const session = await getSession(ctx);

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps = {
    session,
    dehydratedState: dehydrate(queryClient)
  }
  return {pageProps};
};
export default App;
