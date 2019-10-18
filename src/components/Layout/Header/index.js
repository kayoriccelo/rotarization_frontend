import React from 'react';

import useStyles from './styles';


export default function Header() {
    const { root } = useStyles();

    return (
        <div className={root}>
            Header
        </div>
    );
};
