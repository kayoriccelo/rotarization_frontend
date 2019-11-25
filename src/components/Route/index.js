import React from 'react';
import { connect } from 'react-redux';

import {
    StyledRoot, StyledMain, StyledContentTitle, StyledTitle, StyledSubTitle, StyledBorder, StyledContent
} from './styled';


export const RouteCustom = ({ children, routeCustom }) => {
    return (
        <StyledRoot>
            <StyledMain>
                <StyledContentTitle>
                    <StyledTitle children={routeCustom.title} />

                    <StyledSubTitle children={routeCustom.subTitle} />
                </StyledContentTitle>

                <StyledBorder>
                    <StyledContent children={children} />
                </StyledBorder>
            </StyledMain>
        </StyledRoot>
    );
};


const mapStateToProps = ({ routeCustom }) => ({ routeCustom: routeCustom });
export default connect(mapStateToProps, null)(RouteCustom);
