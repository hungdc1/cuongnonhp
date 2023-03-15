import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { database } from '~/components/Api';
import convertSlug from '~/components/ToSlug';
import styles from './FeaturedProducts.module.scss';

const cx = classNames.bind(styles);

function FeaturedProducts() {
    const toSlug = (value) => {
        return 'productpagefeatured/' + value.id + '/' + convertSlug(value.title) + '.html';
    };
    return (
        <div className={cx('containers')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>SẢN PHẨM TIÊU BIỂU</h2>
                <div className={cx('list')}>
                    {database.map((data, index) => {
                        return (
                            <Fragment key={index}>
                                {data.menuchild.map((data1, index) => {
                                    return (
                                        <Fragment key={index}>
                                            {data1.menuitem.map((menuItem, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        {menuItem.featureproduct && (
                                                            <Link to={toSlug(menuItem)} className={cx('item')}>
                                                                <div className={cx('img')}>
                                                                    <img src={menuItem.featureimg} alt="hungdc" />
                                                                </div>
                                                                <p className={cx('name')}>{menuItem.title}</p>
                                                            </Link>
                                                        )}
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
            </div>
            <div className={cx('redline')}></div>
        </div>
    );
}

export default FeaturedProducts;
