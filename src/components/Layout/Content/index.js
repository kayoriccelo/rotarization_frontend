import React from 'react';

import useStyles from './styles';


export default function Content() {
    const { root } = useStyles();

    return (
        <div className={root}>
            Content
        </div>
    );
};
