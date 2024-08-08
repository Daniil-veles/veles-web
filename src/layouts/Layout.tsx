import React from "react";
import Header from "../components/elements/header/Header";
import Meta, { IMeta } from "@/seo/Meta";

interface ILayout extends IMeta {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <div className="flex flex-col min-h-screen pt-[100px] pb-8">
        <Header></Header>
        <main className="flex flex-col flex-grow justify-center">{children}</main>
      </div>
    </Meta>
  );
};

export default Layout;
