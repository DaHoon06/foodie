import {Head} from "next/document";

const DocumentHead = () => {
  return (
    <Head>
      <link rel="stylesheet" as="style"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"/>

      <link rel="icon" href="/favicon.ico"/>
    </Head>
  )
}

export default DocumentHead;