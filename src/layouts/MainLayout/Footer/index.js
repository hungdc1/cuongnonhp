import classNames from 'classnames/bind';

import FooterList from '~/layouts/components/FooterList';
import OrderLookup from '~/layouts/components/OrderLookup';
import WebInfo from '~/layouts/components/WebInfo';
import Mapp from '~/layouts/components/Mapp';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <OrderLookup />
                <FooterList />
                <WebInfo />
                <Mapp />
            </div>
        </div>
    );
}

export default Footer;
