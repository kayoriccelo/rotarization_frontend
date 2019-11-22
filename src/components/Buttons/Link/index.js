import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContentLink } from './styled';


export default function ButtonLink({ labelPrimary, labelSecundary, toLink }) {
    return (
        <StyledContentLink>
            {labelSecundary} <Link to={toLink}>{labelPrimary}</Link>
        </StyledContentLink>
    );
};
