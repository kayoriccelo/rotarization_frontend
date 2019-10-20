import React from 'react';

import useStyles from './styles';
import Breadcrumb from '../../Breadcrumb';


export default function Content({ history }) {
    const { root } = useStyles();

    return (
        <div className={root}>
            <Breadcrumb history={history} />
        </div>
    );
};
