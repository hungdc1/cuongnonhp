import classNames from 'classnames/bind';
import images from '~/assets/imgs';

import styles from './FeaturedProducts.module.scss';

const cx = classNames.bind(styles);

function FeaturedProducts() {
    return (
        <div className={cx('containers')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>SẢN PHẨM TIÊU BIỂU</h2>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkecoampekeco} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('img')}>
                            <img src={images.vonkedientu} alt="hungdc" />
                        </div>
                        <p className={cx('name')}>Vôn kế - Ampe kế cơ</p>
                    </div>
                </div>
            </div>
            <div className={cx('redline')}></div>
        </div>
    );
}

export default FeaturedProducts;
