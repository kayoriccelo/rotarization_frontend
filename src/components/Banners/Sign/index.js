import React from 'react';

import commonStyles from '../../../commons/styles'


export default function Banner() {
    return (
        <div style={{
            flex: 3,
            height: '100%',
            color: 'white',
            background: commonStyles.secundaryColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Área Banner Sign In
        </div>
    );
};
