import HeaderMenu from '../../elements/header-menu/HeaderMenu';
import Button from '../../ui/button/Button';
import styles from './Header.module.scss';


const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={`${styles.wrapper} container mx-auto flex justify-between items-center rounded-md`}>
                <img src="" alt="" className={styles.logo} />

                <HeaderMenu />

                    <Button onClick={() => console.log('Клик')}>
                        Попробовать
                    </Button>
            </div>
        </div>
    );
};

export default Header;