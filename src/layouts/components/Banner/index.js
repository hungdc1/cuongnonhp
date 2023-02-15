import classNames from 'classnames/bind';
import images from '~/assets/imgs';

import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <div className={cx('image-effect')}>
                    <img className={cx('img')} src={images.banner1} alt="hungdc" />
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('box')}>
                    <div className={cx('img-box')}>
                        <div className={cx('image-effect')}>
                            <img className={cx('img')} src={images.banner2} alt="hungdc" />
                        </div>
                    </div>
                    <div className={cx('img-box')}>
                        <div className={cx('image-effect')}>
                            <img className={cx('img')} src={images.banner3} alt="hungdc" />
                        </div>
                    </div>
                </div>

                <div className={cx('box')}>
                    <div className={cx('img-box')}>
                        <div className={cx('image-effect')}>
                            <img className={cx('img')} src={images.banner4} alt="hungdc" />
                        </div>
                    </div>
                    <div className={cx('img-box')}>
                        <div className={cx('image-effect')}>
                            <img className={cx('img')} src={images.banner5} alt="hungdc" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
