import { faCartShopping, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';

import images from '~/assets/imgs';
import Search from '../Search';
import styles from './HeaderMiddle.module.scss';
import RenderAdvise from '~/components/RenderAdvise';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function HeaderMiddle() {
    return (
        <header className={cx('header-middle')}>
            <div className={cx('container')}>
                <Link to={'/'} className={cx('logo')}>
                    <img src={images.logo} className={cx('logo-img')} alt="hungdc" />
                </Link>
                {/* <div className={cx('advise')}>
                    <img src={images.tuvanbanhang} className={cx('advise-img')} alt="hungdc" />
                    <span className={cx('advise-label')}>Tư vấn bán hàng</span>
                </div> */}

                <Tippy
                    interactive={true}
                    delay={[0, 50]}
                    placement="bottom-start"
                    offset={[0, 0]}
                    render={(attrs) => (
                        <div tabIndex="-1" {...attrs} className={cx('adviser-info')}>
                            <RenderAdvise />
                        </div>
                    )}
                >
                    <div className={cx('advise')}>
                        <img src={images.tuvanbanhang} className={cx('advise-img')} alt="hungdc" />
                        <span className={cx('advise-label')}>Tư vấn bán hàng</span>
                    </div>
                </Tippy>

                <Search />
                <div className={cx('phone')}>
                    <FontAwesomeIcon className={cx('phone-icon')} icon={faPhone} />
                    <span className={cx('phone-hots')}>
                        024 66858855 - 024 32056333 <br /> Thứ 2 - Thứ 7, từ 8:00-18:00
                    </span>
                </div>
                <Button to={'/giohang'} nobackground className={cx('cart')}>
                    <FontAwesomeIcon className={cx('cart-icon')} icon={faCartShopping} />
                    <span className={cx('cart-number')}>0</span>
                    <span className={cx('cart-label')}>Giỏ hàng</span>
                </Button>
            </div>
        </header>
    );
}

export default HeaderMiddle;
