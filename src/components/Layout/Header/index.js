import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ClickAwayListener, Grow, Paper, Popper, MenuItem, MenuList } from '@material-ui/core';
import { ExitToApp, AccountBox, ArrowDropDown } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

import { logout } from '../../../auth/store/ducks';
import useStyles from './styles';
import profile from '../../../assets/images/profile.png';


const Header = ({ user, logout, history }) => {
    const { root, toolBar, menu, avatar } = useStyles();
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

    const handleListKeyDown = event => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        };
    };

    return (
        <div className={root}>
            <div className={toolBar}>
            </div>
            <Button
                className={menu}
                ref={anchorRef}
                aria-controls="menu-list-grow"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <Avatar alt="R" src={profile} className={avatar} />
                <div style={{ color: '#404040', fontSize: 10, fontWeight: 'bold' }}>
                    {`${user.first_name} ${user.last_name}`}
                </div>
                <ArrowDropDown fontSize="small"/>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper id="menu-list-grow">
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} onKeyDown={handleListKeyDown} style={{ width: 200 }}>
                                    <MenuItem onClick={event => { history.push('/profile'); handleClose(event)}}>
                                        <AccountBox fontSize="small"/> <div style={{ fontSize: 14, paddingLeft: 6 }}>Perfil</div>
                                    </MenuItem>
                                    <MenuItem onClick={() => logout()}>
                                        <ExitToApp fontSize="small"/> <div style={{ fontSize: 14, paddingLeft: 6 }}>Sair</div>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div >
    );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
