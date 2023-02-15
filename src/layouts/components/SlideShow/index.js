import classNames from 'classnames/bind';
import images from '~/assets/imgs';

import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow() {
    return (
        <div className={cx('container')}>
            <img src={images.sanpham} alt="hungdc" />
        </div>
    );
}

export default SlideShow;
