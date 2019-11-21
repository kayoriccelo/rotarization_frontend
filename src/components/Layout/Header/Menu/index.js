import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Button, ClickAwayListener, Grow, Paper, Popper, Card, CardActionArea, CardActions,
    CardContent, CardMedia, Typography
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

import { logout } from '../../../../auth/store/ducks';
import profile from '../../../../assets/images/profile.png';
import useStyles from './styles';


const MenuCustom = ({ user, logout, history }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const prevOpen = useRef(open);

    useEffect(() => {
        if (prevOpen.current === true && open === false) anchorRef.current.focus();

        prevOpen.current = open;
    }, [open]);

    const handleClick = event => setOpen(prevOpen => !prevOpen);

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Button
                className={styles.menu}
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Avatar alt="R" src={profile} className={styles.avatar} />
                <div style={{ color: '#404040', fontSize: 10, fontWeight: 'bold' }}>
                    {user.first_name}
                </div>
                <ArrowDropDown fontSize="small" />
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper id="menu-list-grow">
                            <ClickAwayListener onClickAway={handleClose}>
                                <Card className={styles.card}>
                                    <CardActionArea onClick={event => { history.push('/profile'); handleClose(event) }}>
                                        <CardMedia
                                            className={styles.media}
                                            image="data:image/jpeg;base64,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"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {`${user.first_name} ${user.last_name}`}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Clique aqui para configurações de conta e mais.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary" onClick={() => logout()}>
                                            Sair
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
};


const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MenuCustom);
