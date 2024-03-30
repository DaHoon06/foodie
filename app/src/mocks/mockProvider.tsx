import { PropsWithChildren, useEffect, useState } from "react";

const isAPIMockingMode = process.env.NEXT_PUBLIC_API_MOCKING === "enabled";

const MSWProvider = ({ children }: PropsWithChildren) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (isAPIMockingMode) {
        await import("@mocks/index");
        setIsReady(true);
      }
    };
    init();

    if (!isReady) init().then();
  }, [isReady]);

  if (isAPIMockingMode && !isReady) return null;
  return <>{children}</>;
};

export default MSWProvider;
