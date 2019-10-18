import React from 'react';

import useStyles from './styles';


export default function Sidebar() {
    const { root } = useStyles();

    return (
        <div className={root}>
            Sidebar
        </div>
    );
};
