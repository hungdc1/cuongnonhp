import classNames from 'classnames/bind';
import styles from './FooterMenu.module.scss';

const cx = classNames.bind(styles);

function FooterMenu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <div className={cx('content')} key={index}>
                    <h4 className={cx('title')}>{item.title}</h4>
                    <div className={cx('list-item')}>
                        {item.data.map((chiledrenItem, index) => {
                            return (
                                <p className={cx('item')} key={index}>
                                    {chiledrenItem}
                                </p>
                            );
                        })}
                    </div>
                </div>
            );
        });
    };
    return <div className={cx('container')}>{renderItems()}</div>;
}

export default FooterMenu;
