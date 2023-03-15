import classNames from 'classnames/bind';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { database } from '~/components/Api';
import { RenderItemF4 } from '~/components/RenderProductItem';

import styles from './ProductOthers.module.scss';

const cx = classNames.bind(styles);

function ProductOthers() {
    let { code } = useParams();

    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Sản phẩm khác</h3>
            <div className={cx('body')}>
                <div className={cx('list')}>
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
                                                                    <Fragment key={index}>
                                                                        <RenderItemF4 menuItem={menuItem} />
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
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
export default ProductOthers;
