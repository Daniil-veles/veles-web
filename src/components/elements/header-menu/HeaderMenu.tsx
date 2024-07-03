import { menu } from '@/const/const';
import HeaderMenuItem from '../header-menu-item/HeaderMenuItem';
import styles from './HeaderMenu.module.scss';

const HeaderMenu: React.FC = () => {
    return (
        <ul className={`${styles.menu} flex flex-start flex-grow`}>
            {menu ? menu.map((item) => (
                <HeaderMenuItem key={item.id} value={item} />
            )) : ''}
        </ul>
    );
};

export default HeaderMenu;