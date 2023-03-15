import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import convertSlug from '../ToSlug';

import styles from './RenderMenuTong.module.scss';

const cx = classNames.bind(styles);

function RenderMenuTong({ data = [] }) {
    const toSlug = (value) => {
        return '/productpage/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    const toSlug2 = (value) => {
        return '/productpage2/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    return (
        <div className={cx('container')}>
            {data.map((item, index) => {
                return (
                    <div className={cx('content')} key={index}>
                        <Link to={toSlug(item)} className={cx('title')}>
                            {item.title}
                        </Link>
                        <div className={cx('list-item')}>
                            {item.menuchild.map((childrenItem, index) => {
                                return (
                                    <Link to={toSlug2(childrenItem)} className={cx('item')} key={index}>
                                        {childrenItem.title}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderMenuTong;
