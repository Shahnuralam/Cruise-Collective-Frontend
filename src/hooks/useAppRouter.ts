import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { isSamePaths, safelyPath } from '@/utils/router';

const useAppRouter = () => {
  const router = useRouter();

  const isSame = useCallback(
    (
      path: string,
      options?: Partial<{
        isSafe: boolean;
        useAsPath: boolean;
        waitForTheRouterToBeReady: boolean;
      }>,
    ) => {
      if (options?.waitForTheRouterToBeReady && !router.isReady) return false;

      const valueA = options?.useAsPath ? router.asPath : router.pathname;
      const valueB = (options?.isSafe ? String : safelyPath)(path);

      return isSamePaths(valueA, valueB);
    },
    [router.isReady, router.asPath, router.pathname],
  );

  return {
    pathname: router.pathname,
    asPath: router.asPath,
    query: router.query,
    isSame,
  };
};

export default useAppRouter;
