import React from 'react';
import { Link } from 'react-router-dom';

import useStyles from './styles';


export default function ButtonLink({ labelPrimary, labelSecundary, toLink }) {
    const { link } = useStyles();

    return (
        <div className={link}>
            {labelSecundary} <Link to={toLink}>{labelPrimary}</Link>
        </div>
    );
};
