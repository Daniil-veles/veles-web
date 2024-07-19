import { getMetaTitle } from "@/utils/utils";
import Head from "next/head";

export interface IMeta {
  title: string;
  description?: string;
}

interface IMetaProps extends IMeta {
  children: React.ReactNode;
}

const Meta: React.FC<IMetaProps> = ({ title, description, children }) => {
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

      {children}
    </>
  );
};

export default Meta;
