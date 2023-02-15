import classNames from 'classnames/bind';
import AdviserInfo from '../AdviserInfo';
import Order from '../Order';
import SlideShow from '../SlideShow';

import styles from './ProductInfo.module.scss';

const cx = classNames.bind(styles);

function ProductInfo() {
    return (
        <div className={cx('container')}>
            <div className={cx('link-tag')}>
                <p>Trang chủ / Linh kiện điện tử / Điện Trở Vạch 1/4W 1%</p>
            </div>

            <div className={cx('content')}>
                <div className={cx('slide-show')}>
                    <SlideShow />
                </div>
                <div className={cx('order')}>
                    <Order />
                </div>
                <div className={cx('advider-info')}>
                    <AdviserInfo />
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;
