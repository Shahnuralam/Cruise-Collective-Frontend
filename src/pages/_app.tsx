import "@/styles/globals.css";
import "node_modules/react-modal-video/scss/modal-video.scss";
import "@/styles/fonts.css";

import { QueryClient, QueryClientProvider } from "react-query";

import type { AppProps } from "next/app";
import Master from "@/layout/Master";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";
import { disableConsoleLogsInProduction } from "@/utils/consoleUtils"; // Import the utility


disableConsoleLogsInProduction();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Master
          pageProps={pageProps}
          masterOptions={(Component as any)?.masterOptions || {}}
        >
          <Component {...pageProps} />
        </Master>
      </QueryClientProvider>
    </SessionProvider>
  );
}
