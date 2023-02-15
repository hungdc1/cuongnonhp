import classNames from 'classnames/bind';

import styles from './TitleProduct.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function TitleProduct() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <Button className={cx('title')} nobackground>
                    LINH KIỆN ĐIỆN TỬ
                </Button>
                <div className={cx('list')}>
                    <Button className={cx('item')} nobackground>
                        Điện trở
                    </Button>
                    <Button className={cx('item')} nobackground>
                        Điện trở
                    </Button>
                    <Button className={cx('item')} nobackground>
                        Điện trở
                    </Button>
                    <Button className={cx('item')} nobackground>
                        Điện trở
                    </Button>
                </div>
            </div>
            <Button className={cx('allview-btn')} nobackground>
                Xem tất cả {'>>'}
            </Button>
        </div>
    );
}

export default TitleProduct;
