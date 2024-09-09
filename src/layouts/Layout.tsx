import React from "react";
import Header from "../components/elements/header/Header";
import Head from "next/head";
import { getMetaTitle } from "@/utils/utils";

interface ILayout {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title, description = null }) => {
  return (
    <>
      <Head>
        <title>{getMetaTitle(title)}</title>

        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getMetaTitle(title)} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <>
            <meta name="robots" content="noindex, nofollow" />
          </>
        )}
      </Head>

      <div className="flex flex-col min-h-screen pt-[100px] pb-6">
        <Header></Header>

        <main className="flex flex-col flex-grow justify-center">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
