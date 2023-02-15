import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import images from '~/assets/imgs';
import Button from '~/components/Button';
import styles from './Cart.module.scss';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('cart-header')}>
                    <h3>Giỏ hàng</h3>
                </div>

                <div className={cx('products-table')}>
                    <table className={cx('table')} cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr className={cx('header-table')}>
                                <td>STT</td>
                                <td>Hình ảnh</td>
                                <td>Mã sản tdhẩm</td>
                                <td>Tên sản tdhẩm</td>
                                <td>Đơn giá</td>
                                <td>Số lượng</td>
                                <td>ĐV tính</td>
                                <td>Thành tiền</td>
                                <td>[Xóa]</td>
                            </tr>

                            <tr className={cx('product')}>
                                <td align="center" className={cx('number')}>
                                    1
                                </td>
                                <td align="left" className={cx('image')}>
                                    <img className="" src={images.sanpham} alt="hungdc" />
                                </td>
                                <td align="left" className={cx('code')}>
                                    CL00968
                                </td>
                                <td align="left" className={cx('name-product')}>
                                    P127 TLP127 SOP-4 chính hãng Toshiba
                                </td>
                                <td align="center" className={cx('unit-price')}>
                                    9,000
                                </td>
                                <td align="center" className={cx('quantity')}>
                                    <input className={cx('input')} type="text" />
                                </td>
                                <td align="center" className={cx('unit-price')}>
                                    Chiếc
                                </td>
                                <td align="center" className={cx('price')}>
                                    57,600
                                </td>
                                <td align="center" className={cx('delete')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faXmark}></FontAwesomeIcon>
                                </td>
                            </tr>
                            <tr className={cx('product')}>
                                <td align="center" className={cx('number')}>
                                    1
                                </td>
                                <td align="left" className={cx('image')}>
                                    <img className="" src={images.sanpham} alt="hungdc" />
                                </td>
                                <td align="left" className={cx('code')}>
                                    CL00968
                                </td>
                                <td align="left" className={cx('name-product')}>
                                    P127 TLP127 SOP-4 chính hãng Toshiba
                                </td>
                                <td align="center" className={cx('unit-price')}>
                                    9,000
                                </td>
                                <td align="center" className={cx('quantity')}>
                                    <input className={cx('input')} type="text" />
                                </td>
                                <td align="center" className={cx('unit-price')}>
                                    Chiếc
                                </td>
                                <td align="center" className={cx('price')}>
                                    57,600
                                </td>
                                <td align="center" className={cx('delete')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faXmark}></FontAwesomeIcon>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={cx('total-table')}>
                    <table className={cx('table')} cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr className={cx('total-products')}>
                                <td colspan="2">
                                    Có <span className={cx('total-quantity')}>15</span> Sản phẩm trong giỏ hàng
                                </td>
                            </tr>
                            <tr className={cx('total')}>
                                <td align="right" className={cx('total-lable')}>
                                    Tổng cộng:
                                </td>
                                <td>
                                    <span className={cx('total-price')}>100,000</span>{' '}
                                    <span className={cx('total-unit')}>đ</span> (Chưa bao gồm phí vận chuyển)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={cx('note')}>
                    <p>
                        Sản phẩm trong giỏ hàng sẽ được lưu trữ nếu quý khách có
                        {
                            <Button className={cx('note-btn')} to={'/login'} nobackground>
                                đăng nhập
                            </Button>
                        }
                        . Nếu quý khách không đăng nhập thì sản phẩm trong giỏ hàng có thể tự xóa để không làm nặng
                        trình duyệt.
                    </p>
                </div>

                <div className={cx('pay-box')}>
                    <div className={cx('pay-content')}>
                        <h4 className={cx('title')}>Thông tin khách hàng</h4>
                        <div className={cx('box')}>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Họ và tên:</p>
                                <input className={cx('form-input')} type="text" />
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Số điện thoại:</p>
                                <input className={cx('form-input')} type="text" placeholder="Số chính" />
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Số dự phòng (nếu có)</p>
                                <input className={cx('form-input')} type="text" />
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Tỉnh / Thành phố:</p>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn tỉnh / thành phố--</option>
                                    <option value="hanoi">Hà Nội</option>
                                    <option value="saigon">TP Hồ Chí Minh</option>
                                    <option value="danang">Đà Nẵng</option>
                                    <option value="angiang">An Giang</option>
                                    <option value="cantho">Cần Thơ</option>
                                    <option value="camau">Cà Mau</option>
                                </select>
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Quận / Huyện:</p>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn quận / huyện--</option>
                                </select>
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Phường xã:</p>
                                <select className={cx('form-input')}>
                                    <option value="">--Chọn phường / xã--</option>
                                </select>
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Số nhà, đường:</p>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    placeholder="Số nhà, ngõ, ngách, thôn, xóm"
                                />
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Thư điện tử</p>
                                <input
                                    className={cx('form-input')}
                                    type="text"
                                    placeholder="Nhập để xem lại đơn hàng và thông tin"
                                />
                            </div>
                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Ghi chú đơn hàng</p>
                                <textarea className={cx('form-area')} type="text" />
                            </div>

                            <div className={cx('bill-check')}>
                                <span className={cx('check')}>
                                    <input type="checkbox" id="checkbill" name="checkbill" />
                                    <label for="checkbill" className={cx('checkbill-label')}>
                                        Tôi muốn viết hóa đơn
                                    </label>
                                </span>
                                <i>(có thêm phí):</i>
                            </div>

                            {/* <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Tên công ty:</p>
                                <input className={cx('form-input')} type="text" />
                            </div>

                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Email công ty: </p>
                                <input className={cx('form-input')} type="text" />
                            </div>

                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Mã số thuế:</p>
                                <input className={cx('form-input')} type="text" />
                            </div>

                            <div className={cx('form-acc')}>
                                <p className={cx('form-lable')}>Địa chỉ công ty:</p>
                                <input className={cx('form-input')} type="text" />
                            </div> */}
                        </div>
                    </div>

                    <div className={cx('pay-content')}>
                        <h4 className={cx('title')}>Phương thức thanh toán</h4>
                        <div className={cx('box')}>
                            <div className={cx('controls')}>
                                <input type="radio" id="atstore" value="At Store" />
                                <label for="atstore">Chuẩn bị hàng để khách qua lấy và thanh toán tại cửa hàng</label>
                            </div>

                            <div className={cx('controls')}>
                                <input type="radio" id="shipinhanoi" value="Ship in Ha Noi" />
                                <label for="atstore">Ship hàng cho khách (áp dụng với khách tại Hà Nội)</label>
                            </div>

                            <div className={cx('controls')}>
                                <input type="radio" id="viettelpost" value="ViettelPost" />
                                <label for="atstore">Gửi qua dịch vụ chuyển phát (ViettelPost)</label>
                            </div>

                            <div className={cx('controls')}>
                                <input type="radio" id="bycar" value="By car" />
                                <label for="atstore">Gửi hàng ra xe</label>
                            </div>
                        </div>

                        <div className={cx('payment-note')}>
                            <div className={cx('box')}>
                                <h4 className={cx('title')}>Lưu ý</h4>
                                <p className={cx('des')}>
                                    - Cước vận chuyển dự kiến được tính với đơn hàng 1kg. Nếu đơn hàng 1kg thì cước vận
                                    chuyển thực tế sẽ nhỏ hơn, nếu đơn hàng 1kg thì cước vận chuyển thực tế sẽ lớn hơn
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('submit-btn')}>
                    <Button normal large className={cx('order-btn')}>
                        Đặt hàng
                    </Button>
                    <Button normal large className={cx('buy-more-btn')}>
                        Mua thêm
                    </Button>
                    <div className={cx('print')}>
                        <img className={cx('print-img')} src={images.print} alt={cx('hungdc')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
