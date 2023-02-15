import classNames from 'classnames/bind';

import styles from './AdviserInfo.module.scss';
import RenderAdvise from '~/components/RenderAdvise';

const cx = classNames.bind(styles);

function AdviserInfo() {
    return (
        <div className={cx('container')}>
            <h3 className={cx('header')}>Tư vấn bán hàng</h3>
            <div className={cx('body')}>
                <RenderAdvise />
            </div>
        </div>
    );
}

export default AdviserInfo;
