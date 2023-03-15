import classNames from 'classnames/bind';
import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import images from '~/assets/imgs';
import { database } from '~/components/Api';

import styles from './SlideShow.module.scss';

const cx = classNames.bind(styles);

function SlideShow() {
    let { code } = useParams();

    const [bigimg, setbigimg] = useState(() => {});

    const changeBigimg = () => {
        setbigimg('');
    };

    return (
        <Fragment>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        {data.menuchild.map((menuchild, index) => {
                            return (
                                <Fragment key={index}>
                                    {menuchild.menuitem.map((menuItem, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {menuItem.items.map((item, index) => {
                                                    if (item.code === code) {
                                                        if (item.img !== undefined) {
                                                            return (
                                                                <div className={cx('container')} key={index}>
                                                                    <div className={cx('big-img')}>
                                                                        <img src={bigimg} alt="hungdc" />
                                                                    </div>
                                                                    <div className={cx('list-small-img')}>
                                                                        {Object.values(item.img).map(
                                                                            (imglink, index) => {
                                                                                return (
                                                                                    <div
                                                                                        className={cx('small-img')}
                                                                                        key={index}
                                                                                        onClick={changeBigimg}
                                                                                    >
                                                                                        <img
                                                                                            src={imglink}
                                                                                            alt="hungdc"
                                                                                        />
                                                                                    </div>
                                                                                );
                                                                            },
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                        return (
                                                            <div className={cx('container')} key={index}>
                                                                <div className={cx('big-img')}>
                                                                    <img src={images.sanpham} alt="hungdc" />
                                                                </div>
                                                                <div className={cx('list-small-img')}>
                                                                    <div className={cx('small-img')}>
                                                                        <img src={images.sanpham} alt="hungdc" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                    return '';
                                                })}
                                            </Fragment>
                                        );
                                    })}
                                </Fragment>
                            );
                        })}
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default SlideShow;
