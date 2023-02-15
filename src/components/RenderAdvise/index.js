import classNames from 'classnames/bind';

import { AdviseInformation } from '~/components/Api';
import styles from './RenderAdvise.module.scss';

const cx = classNames.bind(styles);

function RenderAdvise() {
    return (
        <div>
            {AdviseInformation.map((items, index) => {
                return (
                    <div className={cx('item')} key={index}>
                        <h4 className={cx('title')}>{items.title}: </h4>
                        <div className={cx('des')}>
                            {items.data.map((item, index1) => {
                                return <p key={index1}>{item}</p>;
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default RenderAdvise;
