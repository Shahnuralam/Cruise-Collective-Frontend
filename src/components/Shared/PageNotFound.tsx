import Head from "next/head";
import React from "react";
import PageHeading from "../PageHeading";
import StrokeLine from "../StrokeLine";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center">
      <Head>
        <title>Page Not Found</title>
      </Head>

      <div>
        <div className="text-4xl text-black">Page Not Found</div>
        <div className="py-5 flex justify-center">
          <StrokeLine />
        </div>
      </div>
      <div className="text-2xl text-black max-w-2xl text-center">
        Uh oh, this page must have been lost at sea. Try going back to the
        previous page or return to the <Link className="border-b" href="/">homepage</Link>
      </div>
    </main>
  );
};

export default PageNotFound;
