import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
// @material-ui/icons components
import DirectionsRun from '@material-ui/icons/DirectionsRun';
import EventNote from '@material-ui/icons/EventNote';
import LiveHelp from '@material-ui/icons/LiveHelp';
import Person from '@material-ui/icons/Person';
import Settings from '@material-ui/icons/Settings';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as actionType from '../../constants/actionTypes';

// core components
import componentStyles from 'assets/theme/components/navbar-dropdown.js';

const useStyles = makeStyles(componentStyles);

export default function NavbarDropdown() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
    handleMenuClose();
  };
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Typography
        variant='h6'
        component='h6'
        classes={{ root: classes.menuTitle }}
      >
        Welcome!
      </Typography>
      <Box
        display='flex!important'
        alignItems='center!important'
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Person}
          width='1.25rem!important'
          height='1.25rem!important'
          marginRight='1rem'
        />
        <span>My profile</span>
      </Box>
      <Box
        display='flex!important'
        alignItems='center!important'
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={Settings}
          width='1.25rem!important'
          height='1.25rem!important'
          marginRight='1rem'
        />
        <span>Settings</span>
      </Box>
      <Box
        display='flex!important'
        alignItems='center!important'
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={EventNote}
          width='1.25rem!important'
          height='1.25rem!important'
          marginRight='1rem'
        />
        <span>Activity</span>
      </Box>
      <Box
        display='flex!important'
        alignItems='center!important'
        component={MenuItem}
        onClick={handleMenuClose}
      >
        <Box
          component={LiveHelp}
          width='1.25rem!important'
          height='1.25rem!important'
          marginRight='1rem'
        />
        <span>Support</span>
      </Box>
      <Divider component='div' classes={{ root: classes.dividerRoot }} />
      <Box
        display='flex!important'
        alignItems='center!important'
        component={MenuItem}
        onClick={logout}
      >
        <Box
          component={DirectionsRun}
          width='1.25rem!important'
          height='1.25rem!important'
          marginRight='1rem'
        />
        <span>Logout</span>
      </Box>
    </Menu>
  );

  return (
    <>
      <Button
        edge='end'
        aria-label='account of current user'
        aria-controls={menuId}
        aria-haspopup='true'
        onClick={handleProfileMenuOpen}
        color='inherit'
        classes={{
          label: classes.buttonLabel,
          root: classes.buttonRoot,
        }}
      >
        <Avatar
          alt='...'
          src={require('assets/img/theme/team-4-800x800.jpg').default}
          classes={{
            root: classes.avatarRoot,
          }}
        />
        <Hidden smDown>Jessica Jones</Hidden>
      </Button>
      {renderMenu}
    </>
  );
}
