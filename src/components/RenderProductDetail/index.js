import { Fragment } from 'react';

import { database } from '../Api';

function RenderProductDetail() {
    return (
        <Fragment>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        {data.menuchild.map((data1, index) => {
                            return (
                                <Fragment key={index}>
                                    {data1.menuitem.map((data2, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {data2.items.map((item, index) => {
                                                    return <Fragment key={index}></Fragment>;
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

export default RenderProductDetail;
