import {Html, Main, NextScript} from "next/document";
import DocumentHead from "../layouts/heads/DocumentHead";

export default function Document() {
  return (
    <Html lang="kr">
      <DocumentHead/>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
