"use client";

import type { MouseEvent, ReactNode } from "react";

const convertXUrl = "https://convertx.techcraftsolution.com";

type Props = {
  tool: string;
  ariaLabel: string;
  className?: string;
  children: ReactNode;
};

export default function ConvertXToolLink({ tool, ariaLabel, className, children }: Props) {
  const openTool = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const convertX = window.open(convertXUrl, "_blank");
    if (!convertX) return;

    let attempts = 0;
    let timer: number | undefined;
    const sendTool = () => {
      attempts += 1;
      convertX.postMessage({ type: "convertx:open-tool", tool }, "https://convertx.techcraftsolution.com");
      if (attempts >= 24 && timer !== undefined) window.clearInterval(timer);
    };

    sendTool();
    timer = window.setInterval(sendTool, 250);
  };

  return (
    <a href={convertXUrl} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel} onClick={openTool} className={className}>
      {children}
    </a>
  );
}
