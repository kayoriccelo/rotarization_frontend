import React from 'react';
import { connect } from 'react-redux';

import useStyles from './styles';


export const RouteCustom = ({ children, routeCustom }) => {
    const { content, main, title, subTitle, border, background } = useStyles();

    return (
        <div className={background}>
            <div className={main}>
                <div className={title}>
                    {routeCustom.title.toUpperCase()}
                </div>

                <div className={subTitle}>
                    {routeCustom.subTitle}
                </div>
                
                <div className={border}>
                    <div className={content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = ({ routeCustom }) => ({ routeCustom: routeCustom });
export default connect(mapStateToProps, null)(RouteCustom);
