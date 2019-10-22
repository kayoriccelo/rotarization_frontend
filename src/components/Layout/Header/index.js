import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Menu, MenuItem } from '@material-ui/core';
import { ExitToApp, AccountBox, ArrowDropDown } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
import { logout, loadUser } from '../../../auth/store/ducks';
import useStyles from './styles';


const Header = ({ user, logout, loadUser, history }) => {
    const { root, toolBar, menu, avatar } = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        !user.isAuthenticated && loadUser();
    }, [user, loadUser]);

    const handleClick = event => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    return (
        <div className={root}>
            <div className={toolBar}>
            </div>

            <div className={menu} onClick={handleClick}>
                <Avatar alt="R" src={`https://pickaface.net/assets/images/slides/slide4.png`} className={avatar} />
                <div style={{ color: 'white', fontSize: 14 }}>
                    {`${user.first_name} ${user.last_name}`}
                </div>
                <ArrowDropDown />
            </div>

            <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { history.push('/profile'); handleClose() }}>
                        <AccountBox /> <div style={{ fontSize: 14, paddingLeft: 6 }}>Profile</div>
                    </MenuItem>
                    <MenuItem onClick={() => { logout(); handleClose() }}>
                        <ExitToApp /><div style={{ fontSize: 14, paddingLeft: 6 }}>Logout</div>
                    </MenuItem>
                </Menu>
        </div >
    );
};

const mapStateToProps = ({ auth }) => ({ user: auth.user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logout, loadUser }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
