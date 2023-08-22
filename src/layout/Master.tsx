import React, { useEffect, useMemo } from "react";
import Header, { HeaderOptions } from "@/layout/Header/Header";
import Footer, { FooterOptions } from "@/layout/Footer/Footer";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import LoginPage from "@/pages/login";
import { Loading } from "@/components/Loading";

interface IMasterOptions {
  header: Partial<HeaderOptions>;
  footer: Partial<FooterOptions>;
}

export type MasterOptions = Partial<IMasterOptions>;

export interface IMasterProps {
  children?: React.ReactNode | React.ReactNode[];
  masterOptions?: MasterOptions;
  pageProps: any;
}
const Master: React.FC<IMasterProps> = (props) => {
  const { children, pageProps, masterOptions } = props;

  const { data: session, status } = useSession();

  const isErrorPage = useMemo(() => {
    return Boolean(pageProps?.statusCode && pageProps?.statusCode !== 200);
  }, [pageProps.statusCode]);

  if (isErrorPage) return <>{children}</>;

  if (status === "loading") return <Loading />;

  // if (status !== "authenticated") return <LoginPage />;

  return (
    <>
      <Header options={masterOptions?.header || {}} />
      {children}
      <Footer options={masterOptions?.footer || {}} />
    </>
  );
};

export default Master;
