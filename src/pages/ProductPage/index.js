import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { database } from '~/components/Api';
import Button from '~/components/Button';
import RenderItemF2, { RenderItemF3, RenderItemF4 } from '~/components/RenderProductItem';
import convertSlug from '~/components/ToSlug';
import styles from './ProductPage.module.scss';

const cx = classNames.bind(styles);

export function ProductPage2() {
    let { pid } = useParams();

    const toSlug = (value) => {
        return '/productpage/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    const toSlug2 = (value) => {
        return '/productpage2/' + value.id + '/' + convertSlug(value.title) + '.html';
    };

    return (
        <div className={cx('container')}>
            {database.map((data, index) => {
                return (
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
                        <div className={cx('content-product')} key={index}>
                            {data.menuchild.map((menuchild, index) => {
                                if (pid === menuchild.id) {
                                    return (
                                        <Fragment key={index}>
                                            <RenderItemF3 menuchild={menuchild} />
                                        </Fragment>
                                    );
                                }
                                return '';
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export function ProductPage3() {
    let { pid } = useParams();

    return (
        <div className={cx('container')}>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        {data.menuchild.map((menuchild, index) => {
                            return (
                                <Fragment key={index}>
                                    {menuchild.menuitem.map((menuitem, index) => {
                                        if (pid === menuitem.id) {
                                            return (
                                                <Fragment key={index}>
                                                    <RenderItemF4 menuItem={menuitem} />
                                                </Fragment>
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
        </div>
    );
}

function ProductPage() {
    let { pid } = useParams();

    return (
        <div className={cx('container')}>
            {database.map((data, index) => {
                if (pid === data.id) {
                    return (
                        <Fragment key={index}>
                            <RenderItemF2 data={data} />
                        </Fragment>
                    );
                }
                return '';
            })}
        </div>
    );
}

export default ProductPage;
