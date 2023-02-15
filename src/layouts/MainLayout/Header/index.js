import classNames from 'classnames/bind';
import HeaderBottom from '~/layouts/components/HeaderBottom';
import HeaderMiddle from '~/layouts/components/HeaderMiddle';
import HeaderTop from '~/layouts/components/HeaderTop';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </header>
    );
}

export default Header;
