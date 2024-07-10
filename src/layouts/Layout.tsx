import React, { ReactNode } from "react";
import Header from "../components/blocks/header/Header";
import styles from "./Layout.module.scss";
import Footer from "@/components/blocks/footer/Footer";
import Meta, { IMeta } from "@/seo/Meta";

interface ILayout extends IMeta {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <div className={styles.layout}>
        <Header></Header>
        <main className={styles.main}>{children}</main>
        <Footer></Footer>
      </div>
    </Meta>
  );
};

export default Layout;
