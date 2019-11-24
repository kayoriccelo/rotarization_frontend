import React, { useEffect } from 'react';
import { Widgets } from '@material-ui/icons';

import MenuCustom from './Menu';
import useStyles from './styles';

export default function ({ screen, openDrawer, setOpenDrawer, history }) {
    const styles = useStyles();

    useEffect(() => {
        setOpenDrawer(screen.width > 800);
    }, [screen, setOpenDrawer]);

    return (
        <div className={styles.root}>
            <div className={styles.toolBar}>
                <Widgets className={styles.openSide}
                    onClick={() => setOpenDrawer(!openDrawer)}
                />
            </div>

            <MenuCustom
                history={history}
            />
        </div >
    );
};


