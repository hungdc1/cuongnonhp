import React from 'react';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames/bind';

import styles from './Mapp.module.scss';
import images from '~/assets/imgs';

const cx = classNames.bind(styles);

function Mapp() {
    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                </GoogleMapReact>
            </div>
            <div className={cx('map-img')}>
                <img src={images.mapimg} alt="hungdc" />
            </div>
        </div>
    );
}

export default Mapp;
