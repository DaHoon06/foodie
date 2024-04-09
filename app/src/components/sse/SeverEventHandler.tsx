"use client";
import { ReactElement, useEffect } from "react";

const SERVER = "http://localhost:4800/api/sse";

const ServerEventHandler = (): ReactElement => {
  useEffect(() => {
    const eventSource = new EventSource(`${SERVER}/healthy-checked`);
    eventSource.onmessage = (event: any) => {
      console.log(event);
    };

    eventSource.onerror = (e) => {
      console.log(e, "errpr");
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return null;
};

export default ServerEventHandler;
