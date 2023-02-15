import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './HeaderBottom.module.scss';
import { database } from '~/components/Api';

const cx = classNames.bind(styles);

function HeaderBottom() {
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
                                                    <p className={cx('title')}>{item.title}</p>
                                                    {item.data.map((itemchild, index) => {
                                                        return (
                                                            <p key={index} className={cx('itemchild')}>
                                                                {itemchild.title}
                                                            </p>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </PopperWrapper>
                                </div>
                            )}
                        >
                            <div className={cx('item')}>
                                <img src={data.img} className={cx('icon')} alt="hungdc" />
                                <span className={cx('label')}>{data.title}</span>
                            </div>
                        </Tippy>
                    );
                })}
            </div>
        </header>
    );
}

export default HeaderBottom;
