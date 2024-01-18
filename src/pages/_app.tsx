import '@/styles/globals.css';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import '@/styles/fonts.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import type { AppProps } from 'next/app';
import Master from '@/layout/Master';
import { useState, useEffect } from 'react';
import { SessionProvider } from 'next-auth/react';
import { disableConsoleLogsInProduction } from '@/utils/consoleUtils'; // Import the utility

disableConsoleLogsInProduction();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    // Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-4CKLFM137G';
    script.async = true;
    document.head.appendChild(script);

    const initScript = document.createElement('script');
    initScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4CKLFM137G');
    `;
    document.head.appendChild(initScript);

    return () => {
      // Cleanup if needed
      document.head.removeChild(script);
      document.head.removeChild(initScript);
    };
  }, []);

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
