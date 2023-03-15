import { Fragment } from 'react';
import Items from '../Items';

export function RenderItemF3({ menuchild }) {
    return (
        <Fragment>
            {menuchild.menuitem.map((menuItem, index) => {
                return (
                    <Fragment key={index}>
                        <RenderItemF4 menuItem={menuItem} />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export function RenderItemF4({ menuItem, children }) {
    return (
        <Fragment>
            {menuItem.items.map((item, index) => {
                return <Fragment key={index}>{<Items item={item} /> || { children }}</Fragment>;
            })}
        </Fragment>
    );
}

function RenderItemF2({ data }) {
    return (
        <Fragment>
            {data.menuchild.map((menuchild, index) => {
                return (
                    <Fragment key={index}>
                        <RenderItemF3 menuchild={menuchild} />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}

export default RenderItemF2;
