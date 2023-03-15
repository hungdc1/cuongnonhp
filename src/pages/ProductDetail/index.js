// import ProductDes from '~/layouts/components/ProductDes';
import React from 'react';
import ProductInfo from '~/layouts/components/ProductInfo';
import ProductOthers from '~/layouts/components/ProductOthers';

import classNames from 'classnames/bind';

import styles from './ProductDetail.module.scss';

const cx = classNames.bind(styles);

function ProductDetail() {
    return (
        <div className={cx('container')}>
            <ProductInfo />
            {/* <ProductDes /> */}
            <ProductOthers />
        </div>
    );
}

export default ProductDetail;
