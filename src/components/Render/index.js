import { Fragment } from 'react';
import { database } from '../Api';
import RenderProductItem from '../RenderProductItem';

function RenderItem() {
    return (
        <Fragment>
            {database.map((data, index) => {
                return (
                    <Fragment key={index}>
                        <RenderProductItem data={data} />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default RenderItem;
