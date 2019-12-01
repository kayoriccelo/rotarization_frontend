import React, { useEffect } from 'react';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import MenuIcon from '@material-ui/icons/Menu';

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
                {openDrawer ?
                    <MenuOpenIcon className={styles.openSide}
                        onClick={() => setOpenDrawer(!openDrawer)}
                    />
                    :
                    <MenuIcon className={styles.openSide}
                        onClick={() => setOpenDrawer(!openDrawer)}
                    />
                }
            </div>

            <MenuCustom
                history={history}
            />
        </div >
    );
};


