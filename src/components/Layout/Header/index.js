import React from 'react';

import MenuCustom from './Menu';
import useStyles from './styles';

export default function ({ history }) {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.toolBar}>
            </div>

            <MenuCustom
                history={history}
            />
        </div >
    );
};


