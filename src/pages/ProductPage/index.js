import classNames from 'classnames/bind';
import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { database } from '~/components/Api';
import RenderItemF2, { RenderItemF3, RenderItemF4 } from '~/components/RenderProductItem';
import styles from './ProductPage.module.scss';

const cx = classNames.bind(styles);

export function ProductPage2() {
    let { pid } = useParams();

    return (
        <Fragment>
            <div className={cx('container')}>
                {database.map((data, index) => {
                    return (
                        <Fragment key={index}>
                            {data.menuchild.map((menuchild, index) => {
                                if (pid === menuchild.id) {
                                    return (
                                        <Fragment key={index}>
                                            <div className={cx('label')}>{menuchild.title}</div>
                                            <div className={cx('content-product')}>
                                                <RenderItemF3 menuchild={menuchild} />
                                            </div>
                                        </Fragment>
                                    );
                                }
                                return '';
                            })}
                        </Fragment>
                    );
                })}
            </div>
        </Fragment>
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
                                                    <div className={cx('label')}>{menuitem.title}</div>
                                                    <div className={cx('content-product')}>
                                                        <RenderItemF4 menuItem={menuitem} />
                                                    </div>
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
                            <div className={cx('label')}>{data.title}</div>
                            <div className={cx('content-product')}>
                                <RenderItemF2 data={data} />
                            </div>
                        </Fragment>
                    );
                }
                return '';
            })}
        </div>
    );
}

export default ProductPage;
