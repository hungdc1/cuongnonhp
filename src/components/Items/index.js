import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Items.module.scss';
import Button from '~/components/Button';
import images from '~/assets/imgs';
import formatCurrency from '~/components/FormatCurrency';
import convertSlug from '../ToSlug';

const cx = classNames.bind(styles);

function Items({ item }) {
    const toSlug = (value) => {
        return '/productdetail/' + value.code + '/' + convertSlug(value.title) + '.html';
    };

    return (
        <div className={cx('content-product')}>
            <Link to={toSlug(item)} className={cx('product-img')}>
                <img src={images.sanpham} alt="hungdc" />
            </Link>
            <Link to={toSlug(item)} className={cx('title-product')}>
                {item.title}
            </Link>
            <p className={cx('price-product')}>{formatCurrency(Object.values(item.pricelist)[0])}</p>
            <Button to={toSlug(item)} normal className={cx('product-btn')}>
                Chi tiết
            </Button>
        </div>
    );
}

export default Items;
