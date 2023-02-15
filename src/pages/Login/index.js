import { faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/imgs';
import Button from '~/components/Button';

import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <p className={cx('link-tag')}>Trang chủ / Đăng nhập tài khoản</p>
            <div className={cx('content')}>
                <img src={images.usericon} alt="hungdc" />

                <div className={cx('form-acc')}>
                    <div className={cx('form-icon')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                    </div>
                    <input className={cx('form-input')} type="text" placeholder="Số điện thoại hoặc Email" />
                </div>
                {/* <span className={cx('warning')}>Phải là số điện thoại hoặc email !</span> */}

                <div className={cx('form-acc')}>
                    <div className={cx('form-icon')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faLock} />
                    </div>
                    <input className={cx('form-input')} type="password" placeholder="Mật khẩu" />
                </div>
                {/* <span className={cx('warning')}>Mật khẩu không được để trống !</span> */}

                <div className={cx('btn-group')}>
                    <Button normal large className={cx('login')}>
                        Đăng nhập
                    </Button>
                    <div className={cx('btn')}>
                        <Button normal large className={cx('signin')}>
                            Đăng ký
                        </Button>
                        <Button normal large className={cx('forget-password')}>
                            Quên mật khẩu
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
