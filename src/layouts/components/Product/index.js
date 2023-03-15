import classNames from 'classnames/bind';

import styles from './Product.module.scss';
import Button from '~/components/Button';
import { database } from '~/components/Api';
import { Fragment } from 'react';
import RenderItemF2 from '~/components/RenderProductItem';
import convertSlug from '~/components/ToSlug';

const cx = classNames.bind(styles);

function Product() {
    const toSlug = (value) => {
        return '/productpage/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    const toSlug2 = (value) => {
        return '/productpage2/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    return (
        <div className={cx('body')}>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        <div className={cx('container')}>
                            <div className={cx('content')}>
                                <Button to={toSlug(data)} className={cx('title')} nobackground>
                                    {data.title}
                                </Button>
                                <div className={cx('list')}>
                                    {data.menuchild.map((item, index) => {
                                        return (
                                            <Button to={toSlug2(item)} className={cx('item')} nobackground key={index}>
                                                {item.title}
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                            <Button to={toSlug(data)} className={cx('allview-btn')} nobackground>
                                Xem tất cả {'>>'}
                            </Button>
                        </div>

                        <div className={cx('container-product')}>
                            <RenderItemF2 data={data} />
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
}

export default Product;
