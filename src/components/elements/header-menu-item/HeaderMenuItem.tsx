import Link from 'next/link';
import styles from './HeaderMenuItem.module.scss';
import { HeaderMenu } from '@/types/types';

interface HeaderMenuItemProps {
    value: HeaderMenu;
}


const HeaderMenuItem: React.FC<HeaderMenuItemProps> = ({ value }) => {
    const { text, link } = value;

    return (
        <li className={styles.item}>
            <Link href={link} className={styles.link}>
                {text}
            </Link>
        </li>
    );
};

export default HeaderMenuItem;