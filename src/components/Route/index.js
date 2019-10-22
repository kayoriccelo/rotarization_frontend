import React from 'react';

import useStyles from './styles';


export default function RouteCustom({ children }) {
    const { content, main, border, background } = useStyles();

    return (
        <div className={background}>
            <div className={main}>
                <div className={border}>
                    <div className={content}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
