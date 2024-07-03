import React, { ReactNode } from 'react';
import Header from '../blocks/header/Header';
import styles from './Layout.module.scss';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header></Header>

            {children}

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;