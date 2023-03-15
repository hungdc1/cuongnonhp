import classNames from 'classnames/bind';

import styles from './HeaderTop.module.scss';
import images from '~/assets/imgs';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <header className={cx('header-top')}>
            <div className={cx('container')}>
                <ul className={cx('menu-list')}>
                    <li className={cx('menu-item')}>
                        <img src={images.kiemtravd} className={cx('img')} alt="hungdc" />
                        <Button to={'/kiemtravandon'} className={cx('btn')} nobackground>
                            Kiểm tra vận đơn
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <img src={images.tuyendung} className={cx('img')} alt="hungdc" />
                        <Button to={'/tuyendung'} className={cx('btn')} nobackground>
                            Tuyển dụng
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <img src={images.gioithieu} className={cx('img')} alt="hungdc" />
                        <Button to={'/gioithieu'} className={cx('btn')} nobackground>
                            Giới thiệu
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <img src={images.baiviet} className={cx('img')} alt="hungdc" />
                        <Button to={'/baiviet'} className={cx('btn')} nobackground>
                            Bài viết
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <img src={images.thuviendownload} className={cx('img')} alt="hungdc" />
                        <Button to={'/thuviendownload'} className={cx('btn')} nobackground>
                            Thư viện Download
                        </Button>
                    </li>
                    <li className={cx('menu-item')}>
                        <img src={images.lienhe} className={cx('img')} alt="hungdc" />
                        <Button to={'/lienhe'} className={cx('btn')} nobackground>
                            Liên hệ
                        </Button>
                    </li>{' '}
                    <li className={cx('menu-item')}>
                        <Button to={'/signin'} className={cx('btn')} nobackground>
                            Đăng ký
                        </Button>
                    </li>{' '}
                    <li className={cx('menu-item')}>
                        <Button to={'/login'} nobackground>
                            Đăng nhập
                        </Button>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default HeaderTop;
