import React from 'react';

import useStyles from './styles';


export default function Banner() {
    const { banner } = useStyles();

    return (
        <div className={banner}>
            <img
                style={{ width: '100%', height: '100%' }}
                src={require('../../../assets/images/banner.jpg')}
                alt="banner"
            />
        </div>
    );
};
