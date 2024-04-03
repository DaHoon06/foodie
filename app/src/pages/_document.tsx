import {Head, Html, Main, NextScript} from "next/document";

const kakaoAppKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY;

export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link rel="stylesheet" as="style"
              href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="icon" href="/favicon.ico"/>
        {/*<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" async/>*/}
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
