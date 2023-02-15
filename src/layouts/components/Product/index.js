import classNames from 'classnames/bind';
import images from '~/assets/imgs';
import Button from '~/components/Button';

import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
            <div className={cx('content')}>
                <Button to={'/productdetail'} className={cx('product-img')}>
                    <img src={images.sanpham} alt="hungdc" />
                </Button>
                <Button to={'/productdetail'} className={cx('title')}>
                    Điện trở vạch 1/4W 2.4K 1% (1000c)
                </Button>
                <p className={cx('price')}>
                    44,000 <span>đ</span>
                </p>
                <Button to={'/productdetail'} normal className={cx('product-btn')}>
                    Chi tiết
                </Button>
            </div>
        </div>
    );
}

export default Product;
