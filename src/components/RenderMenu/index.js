import classNames from 'classnames/bind';

import styles from './RenderMenu.module.scss';

const cx = classNames.bind(styles);

function RenderMenu() {
    return <div className={cx('container')}></div>;
}

export default RenderMenu;
