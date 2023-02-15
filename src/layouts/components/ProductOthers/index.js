import classNames from 'classnames/bind';
import Product from '../Product';

import styles from './ProductOthers.module.scss';

const cx = classNames.bind(styles);

function ProductOthers() {
    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Sản phẩm khác</h3>
            <div className={cx('list')}>
                <Product />
            </div>
        </div>
    );
}
export default ProductOthers;
