import classNames from 'classnames/bind';
import images from '~/assets/imgs';
import Button from '~/components/Button';

import styles from './OrderLookup.module.scss';

const cx = classNames.bind(styles);

function OrderLookup() {
    return (
        <div className={cx('container')}>
            <div className={cx('image-effect')}>
                <img className={cx('img')} src={images.vandon} alt="hungdc" />
            </div>
            <div className={cx('search-box')}>
                <p className={cx('label-1')}>TRA CỨU MÃ VẬN ĐƠN VÀ HÀNH TRÌNH VẬN CHUYỂN</p>
                <div className={cx('search')}>
                    <input placeholder="Nhập số điện thoại vào đây" />
                    <Button className={cx('search-btn')}>Tìm kiếm</Button>
                </div>
                <p className={cx('label-2')}>
                    Hotline hỗ trợ vận đơn: 0985 084 693 (Hỗ trợ tra mã vận đơn chuyển phát)
                </p>
            </div>
        </div>
    );
}

export default OrderLookup;
