import React from 'react';

import { StyledBanner, StyledImageBanner } from './styled';


export default function Banner() {
    return (
        <StyledBanner>
            <StyledImageBanner
                src={require('../../../assets/images/banner.jpg')}
                alt="banner"
            />
        </StyledBanner>
    );
};
