import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import AdviserInfo from '../AdviserInfo';
import Order from '../Order';
import SlideShow from '../SlideShow';

import styles from './ProductInfo.module.scss';
import { database } from '~/components/Api';

const cx = classNames.bind(styles);

function ProductInfo() {
    let { code } = useParams();

    return (
        <div className={cx('container')}>
            <div className={cx('link-tag')}>
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
                                                            return (
                                                                <p key={index}>
                                                                    Trang chủ / {data.title} / {menuItem.title}
                                                                </p>
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
            </div>

            <div className={cx('content')}>
                <div className={cx('slide-show')}>
                    <SlideShow />
                </div>
                <div className={cx('order')}>
                    <Order />
                </div>
                <div className={cx('advider-info')}>
                    <AdviserInfo />
                </div>
            </div>
        </div>
    );
}
export default ProductInfo;
