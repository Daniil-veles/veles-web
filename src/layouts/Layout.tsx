import React, { ReactNode } from 'react';
import Header from '../components/blocks/header/Header';
import styles from './Layout.module.scss';
import Footer from '@/components/blocks/footer/Footer';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header></Header>

            {children}

            <Footer></Footer>
        </div>
    );
};

export default Layout;