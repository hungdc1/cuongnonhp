import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/imgs';
import Button from '~/components/Button';
import styles from './WebInfo.module.scss';

const cx = classNames.bind(styles);

function WebInfo() {
    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                <h3 className={cx('title')}>THÔNG TIN TÀI KHOẢN</h3>
                <div className={cx('info-bank')}>
                    <p>Nội dung chuyển tiền chỉ cần thông tin:</p>
                    <h4>Số hóa đơn hoặc Số điện thoại hoặc Họ tên KH</h4>
                    <div className={cx('bank-account')}>
                        <img src={images.techcombank} alt="" className={cx('img')} />
                        <div>
                            <p>
                                Chủ TK:
                                <span style={{ fontWeight: '600' }}> Đỗ Thị Mỹ</span>
                            </p>
                            <p>
                                Số TK:
                                <span style={{ color: 'red' }}> 9261823666</span>
                            </p>

                            <p>
                                <span style={{ color: 'red' }}>Techcombank </span>
                                Thanh Xuân, HN
                            </p>
                        </div>
                    </div>
                    <span className={cx('')}> ------------------------------------------------------</span>
                    <div className={cx('bank-account')}>
                        <img src={images.vietcombank} alt="" className={cx('img')} />
                        <div>
                            <p>
                                Chủ TK:
                                <span style={{ fontWeight: '600' }}> Đỗ Thị Mỹ</span>
                            </p>
                            <p>
                                Số TK:
                                <span style={{ color: 'red' }}> 1026836007</span>
                            </p>

                            <p>
                                <span style={{ color: 'green' }}>Vietcombank </span>
                                Thanh Xuân, HN
                            </p>
                        </div>
                    </div>
                </div>
                <span className={cx('')}> ------------------------------------------------------</span>
                <img className={cx('noticed')} src={images.bocongthuong} alt="" />
            </div>
            <div className={cx('info')}>
                <h3 className={cx('title')}>CHÍNH SÁCH & QUY ĐỊNH</h3>
                <div className={cx('info-policy')}>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/refundpolicy'} className={cx('policy')} nobackground>
                            Chính sách đổi trả - hoàn tiền
                        </Button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/shippinganddeliverypolicy'} className={cx('policy')} nobackground>
                            Chính sách vận chuyển và giao nhận
                        </Button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/custormerinfoprivacypolicy'} className={cx('policy')} nobackground>
                            Chính sách bảo mật thông tin khách hàng
                        </Button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/termsandformsofpayment'} className={cx('policy')} nobackground>
                            Chính sách bảo mật thông tin khách hàng
                        </Button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/productwarrantypolicy'} className={cx('policy')} nobackground>
                            Chính sách bảo hành sản phẩm
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('info')}>
                <h3 className={cx('title')}>WEBSITE THÀNH VIÊN</h3>
                <div className={cx('info-member')}>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/nhatminhESC'} nobackground className={cx('member')}>
                            baohanh.nhatminhESC.com
                        </Button>
                    </div>
                    <div>
                        <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        <Button to={'/unitrend'} nobackground className={cx('member')}>
                            Uni-Trend.vn
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('info')}>
                <h3 className={cx('title')}>ĐỊA CHỈ LIÊN HỆ</h3>
                <div className={cx('info-contact')}>
                    <h3>www.linhkienchatluong.vn</h3>
                    <p>Số 15, ngách 71A, ngõ 116 Nguyễn Xiển, Thanh Xuân, HN (khu tập thể đại học Khoa học tự nhiên)</p>
                    <h3>Bán lẻ - bán online:</h3>
                    <div>
                        <p>ĐT: 024.66858855 - 024.32056333</p>
                        <p>Email: banhang@linhkienchatluong.vn</p>
                        <p>Zalo: 0946386693 - 0949686693</p>
                    </div>
                    <h3>Thời gian làm việc :</h3>
                    <div>
                        <p>Buổi sáng: 8:00 - 12:00</p>
                        <p>Buổi chiều: 13:30 - 18:00</p>
                        <p>Từ Thứ 2 - Thứ 7</p>
                    </div>
                    <span className={cx('')}> ------------------------------------------------------</span>
                    <p>Giấy phép ĐKKD: 01F8010658</p>
                    <p>Cấp ngày: 15/03/2017 tại UBND Q.Thanh Xuân</p>
                </div>
            </div>
        </div>
    );
}

export default WebInfo;
