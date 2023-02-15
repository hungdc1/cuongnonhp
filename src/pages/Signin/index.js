import classNames from 'classnames/bind';
import images from '~/assets/imgs';
import Button from '~/components/Button';

import styles from './Signin.module.scss';

const cx = classNames.bind(styles);

function Signin() {
    return (
        <div className={cx('container')}>
            <p className={cx('link-tag')}>Trang chủ / Tạo tài khoản</p>
            <div className={cx('box')}>
                <div className={cx('content')}>
                    <img src={images.usericon} alt="hungdc" />
                    <p className={cx('description')}>
                        Đăng ký thành viên để đặt hàng dễ dàng <br />
                        lưu giỏ hàng và quản lý đơn hàng
                    </p>

                    <div className={cx('singin-account')}>
                        <h3 className={cx('title')}>Đăng ký tài khoản</h3>
                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Điện thoại:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Mật khẩu:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="password" />
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Họ và tên:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Tỉnh / Thành phố:</p>

                            <div className={cx('form-control')}>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn tỉnh / thành phố--</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="saigon">TP Hồ Chí Minh</option>
                                    <option value="danang">Đà Nẵng</option>
                                    <option value="angiang">An Giang</option>
                                    <option value="cantho">Cần Thơ</option>
                                    <option value="camau">Cà Mau</option>
                                </select>
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Quận / Huyện:</p>
                            <div className={cx('form-control')}>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn quận / huyện--</option>
                                </select>
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Phường xã:</p>
                            <div className={cx('form-control')}>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn phường / xã--</option>
                                </select>
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Số nhà, đường:</p>
                            <div className={cx('form-control')}>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    placeholder="Số nhà, ngõ, ngách, thôn, xóm"
                                />
                                <span className={cx('form-required')}>*</span>
                                <small></small>
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Email:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                                <small></small>
                            </div>
                        </div>
                    </div>

                    <div className={cx('company-info')}>
                        <h3 className={cx('title')}>THÔNG TIN CÔNG TY</h3>

                        <i className={cx('note')}>(Không bắt buộc - chỉ dùng trong trường hợp khách cần hóa đơn)</i>
                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Tên công ty:</p>

                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Địa chỉ công ty:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="password" />
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Email công ty:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                            </div>
                        </div>

                        <div className={cx('form-acc')}>
                            <p className={cx('form-lable')}>Mã số thuế:</p>
                            <div className={cx('form-control')}>
                                <input className={cx('form-input')} type="text" />
                            </div>
                        </div>
                    </div>

                    <div className={cx('btn-group')}>
                        <Button normal large className={cx('btn')}>
                            Đăng ký
                        </Button>
                        <Button normal large className={cx('btn')}>
                            Làm lại
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
