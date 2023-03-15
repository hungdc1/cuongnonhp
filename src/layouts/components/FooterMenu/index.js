import classNames from 'classnames/bind';
import { database } from '~/components/Api';
import RenderMenuTong from '~/components/RenderMenuTong';

import styles from './FooterMenu.module.scss';

const cx = classNames.bind(styles);

function FooterMenu() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Danh mục</h2>
                <div className={cx('menu')}>
                    <div className={cx('list')}>
                        <RenderMenuTong data={database} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterMenu;
