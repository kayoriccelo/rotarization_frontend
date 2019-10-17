import React from 'react';

import useStyles from './styles';


export default function Banner() {
    const { banner } = useStyles();

    return (
        <div className={banner}>
            Área Banner Sign In
        </div>
    );
};
