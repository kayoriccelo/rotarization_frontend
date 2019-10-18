import React from 'react';

import useStyles from './styles';
import DrawerCustom from './Drawer';


export default function Sidebar({ screen }) {
    const { root, rootCollapsed } = useStyles();

    return (
        <div className={root}>
            {/* TODO: Kayo Riccelo - Incluir alguma Logo */}
            <DrawerCustom
                screen={screen}
            />
        </div>
    );
};
