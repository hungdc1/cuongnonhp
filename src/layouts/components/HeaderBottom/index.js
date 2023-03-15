import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './HeaderBottom.module.scss';
import { database } from '~/components/Api';
import { Link } from 'react-router-dom';
import convertSlug from '~/components/ToSlug';

const cx = classNames.bind(styles);

function HeaderBottom() {
    const toSlug = (value) => {
        return '/productpage/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    const toSlug2 = (value) => {
        return '/productpage2/' + value.id + '/' + convertSlug(value.title) + '.html';
    };
    const toSlug3 = (value) => {
        return '/productpage3/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    return (
        <header className={cx('header-bottom')}>
            <div className={cx('container')}>
                {database.map((data, index) => {
                    return (
                        <Tippy
                            key={index}
                            interactive={true}
                            delay={[0, 50]}
                            placement="bottom-start"
                            offset={[0, 0]}
                            render={(attrs) => (
                                <div tabIndex="-1" {...attrs}>
                                    <PopperWrapper>
                                        {data.menuchild.map((item, index) => {
                                            return (
                                                <div className={cx('menu')} key={index}>
                                                    <Link to={toSlug2(item)} className={cx('title')}>
                                                        {item.title}
                                                    </Link>
                                                    {item.menuitem.map((menuitem, index) => {
                                                        return (
                                                            <Link
                                                                to={toSlug3(menuitem)}
                                                                key={index}
                                                                className={cx('itemchild')}
                                                            >
                                                                {menuitem.title}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <Link to={toSlug(data)} className={cx('item')}>
                                <img src={data.img} className={cx('icon')} alt="hungdc" />
                                <span className={cx('label')}>{data.title}</span>
                            </Link>
                        </Tippy>
                    );
                })}
            </div>
        </header>
    );
}

export default HeaderBottom;
