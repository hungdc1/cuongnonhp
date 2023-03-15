import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './RenderMenuTong.module.scss';

const cx = classNames.bind(styles);

function RenderMenuTong({ data = [] }) {
    return (
        <div className={cx('container')}>
            {data.map((item, index) => {
                return (
                    <div className={cx('content')} key={index}>
                        <h4 className={cx('title')}>{item.title}</h4>
                        <div className={cx('list-item')}>
                            {item.menuchild.map((childrenItem, index) => {
                                return (
                                    <Link className={cx('item')} key={index}>
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
