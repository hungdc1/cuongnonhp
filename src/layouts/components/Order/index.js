import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Order.module.scss';
import images from '~/assets/imgs';
import { database } from '~/components/Api';

const cx = classNames.bind(styles);

// const loaddata = database.map((menu) => {
//     return ({ menu.menuchild.map((item) => {

//     }) });
// });

function Order() {
    // console.log(loaddata);
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>Điện trở vạch 1/4W 2.4K 1% (1000c)</h3>
                <div className={cx('info')}>
                    <div>
                        <p>Mã sản phẩm: CLA2745 </p>
                        <p>Xuất sứ: Đang cập nhật </p>
                    </div>
                    <div>
                        <p>Cập nhật cuối cùng: 19/06/2021 </p>
                        <p>Thương hiệu: Đang cập nhật</p>
                    </div>
                </div>
                <div className={cx('table-productinfo')}>
                    <h3 className={cx('table-title')}>BẢNG GIÁ SẢN PHẨM THEO SỐ LƯỢNG</h3>

                    <div className={cx('table-number')}>
                        <p className={cx('lable-number')}>Số lượng</p>
                        <div className={cx('number')}>
                            <p>1-9</p>
                            <p>10-29</p>
                            <p>30-49</p>
                            <p>50-99</p>
                            <p>{'>'}=100</p>
                        </div>
                    </div>
                    <div className={cx('table-price')}>
                        <p className={cx('lable-price')}>Giá(VNĐ)</p>
                        <div className={cx('price')}>
                            <p>26,000</p>
                            <p>25,000</p>
                            <p>24,000</p>
                            <p>23,500</p>
                            <p>23,000</p>
                        </div>
                    </div>

                    <p className={cx('table-commit')}>
                        <span>Linhkienchatluong.vn </span>
                        bán đúng giá công khai trên Website.
                    </p>
                </div>

                <p className={cx('note')}>1 dây = 1000 chiếc, 1 hộp nguyên = 5 dây (5.000 chiếc)</p>

                <div className={cx('select')}>
                    <h4 className={cx('select-lable')}>Lựa chọn:</h4>
                    <div className={cx('select-btn')}>
                        <Button select small>
                            Màu trắng
                        </Button>
                        <Button select small>
                            Màu đỏ{' '}
                        </Button>
                        <Button select small>
                            Màu xanh lá tinh khiết
                        </Button>
                        <Button select small>
                            Màu xanh lá ánh vàng
                        </Button>
                        <Button select small>
                            Màu cam
                        </Button>
                        <Button select small>
                            Màu tím
                        </Button>
                        <Button select small>
                            Màu hồng
                        </Button>
                        <Button select small>
                            Màu xanh dương
                        </Button>
                        <Button select small>
                            Màu vàng{' '}
                        </Button>
                    </div>
                </div>

                <div className={cx('order-quantity')}>
                    <p className={cx('order-lable')}>Số lượng đặt mua:</p>
                    <input type="text" className={cx('order-input')} />
                    <p className={cx('order-unit')}>Dây</p>
                    <p className={cx('order-note')}>(1 dây = 1000 chiếc)</p>
                </div>

                <div className={cx('order-btn')}>
                    <Button normal large className={cx('btn', 'order-now')}>
                        <img src={images.iconorder} alt="hungdc" />

                        <span>Đặt hàng ngay</span>
                    </Button>

                    <Button normal large className={cx('btn')}>
                        <img src={images.iconaddcart} alt="hungdc" />
                        <span>Thêm vào giỏ hàng</span>
                    </Button>

                    <Button normal large className={cx('btn', 'shopping-guide')}>
                        <span>Hướng dẫn mua hàng</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Order;
