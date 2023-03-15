import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Order.module.scss';
import images from '~/assets/imgs';
import { database } from '~/components/Api';
import formatCurrency from '~/components/FormatCurrency';

const cx = classNames.bind(styles);

function Order() {
    let { code } = useParams();

    return (
        <Fragment>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        {data.menuchild.map((menuchild, index) => {
                            return (
                                <Fragment key={index}>
                                    {menuchild.menuitem.map((menuItem, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {menuItem.items.map((item, index) => {
                                                    if (item.code === code) {
                                                        return (
                                                            <div className={cx('container')} key={index}>
                                                                <div className={cx('content')}>
                                                                    <h3 className={cx('title')}>{item.title}</h3>
                                                                    <div className={cx('info')}>
                                                                        <div>
                                                                            <p>Mã sản phẩm: {item.code} </p>
                                                                            <p>Xuất sứ: {item.origin} </p>
                                                                        </div>
                                                                        <div>
                                                                            <p>Cập nhật cuối cùng: {item.updated_at}</p>
                                                                            <p>Thương hiệu: {item.brand}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('table-productinfo')}>
                                                                        <h3 className={cx('table-title')}>
                                                                            BẢNG GIÁ SẢN PHẨM THEO SỐ LƯỢNG
                                                                        </h3>

                                                                        <div className={cx('table-number')}>
                                                                            <p className={cx('lable-number')}>
                                                                                Số lượng
                                                                            </p>
                                                                            <div className={cx('number')}>
                                                                                {Object.keys(item.pricelist).map(
                                                                                    (keyprice, index) => {
                                                                                        return (
                                                                                            <p key={index}>
                                                                                                {keyprice}
                                                                                            </p>
                                                                                        );
                                                                                    },
                                                                                )}
                                                                            </div>
                                                                        </div>
                                                                        <div className={cx('table-price')}>
                                                                            <p className={cx('lable-price')}>
                                                                                Giá(VNĐ)
                                                                            </p>
                                                                            <div className={cx('price')}>
                                                                                {Object.values(item.pricelist).map(
                                                                                    (valueprice, index) => {
                                                                                        return (
                                                                                            <p key={index}>
                                                                                                {formatCurrency(
                                                                                                    valueprice,
                                                                                                )}
                                                                                            </p>
                                                                                        );
                                                                                    },
                                                                                )}
                                                                            </div>
                                                                        </div>

                                                                        <p className={cx('table-commit')}>
                                                                            <span>Linhkienchatluong.vn </span>
                                                                            bán đúng giá công khai trên Website.
                                                                        </p>
                                                                    </div>

                                                                    {/* <p className={cx('note')}>
                                                                        1 dây = 1000 chiếc, 1 hộp nguyên = 5 dây (5.000
                                                                        chiếc)
                                                                    </p> */}

                                                                    {/* <div className={cx('select')}>
                                                                        <h4 className={cx('select-lable')}>
                                                                            Lựa chọn:
                                                                        </h4>
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
                                                                    </div> */}

                                                                    <div className={cx('order-quantity')}>
                                                                        <p className={cx('order-lable')}>
                                                                            Số lượng đặt mua:
                                                                        </p>
                                                                        <input
                                                                            defaultValue="1"
                                                                            type="text"
                                                                            className={cx('order-input')}
                                                                        />
                                                                        <p className={cx('order-unit')}>{item.unit}</p>
                                                                        {/* <p className={cx('order-note')}>
                                                                            (1 dây = 1000 chiếc)
                                                                        </p> */}
                                                                    </div>

                                                                    <div className={cx('order-btn')}>
                                                                        <Button
                                                                            normal
                                                                            large
                                                                            className={cx('btn', 'order-now')}
                                                                        >
                                                                            <img src={images.iconorder} alt="hungdc" />

                                                                            <span>Đặt hàng ngay</span>
                                                                        </Button>

                                                                        <Button normal large className={cx('btn')}>
                                                                            <img
                                                                                src={images.iconaddcart}
                                                                                alt="hungdc"
                                                                            />
                                                                            <span>Thêm vào giỏ hàng</span>
                                                                        </Button>

                                                                        <Button
                                                                            normal
                                                                            large
                                                                            className={cx('btn', 'shopping-guide')}
                                                                        >
                                                                            <span>Hướng dẫn mua hàng</span>
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return '';
                                                })}
                                            </Fragment>
                                        );
                                    })}
                                </Fragment>
                            );
                        })}
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default Order;
