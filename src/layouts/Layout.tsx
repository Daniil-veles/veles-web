import React from "react";
import Head from "next/head";
import { getMetaTitle } from "@/utils/utils";

interface ILayout {
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({
  children,
  className,
  title,
  description = null,
}) => {
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

      <div className={`bg-c-blue-300 flex flex-col h-screen ${className}`}>
        <main className="h-full flex flex-col flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
