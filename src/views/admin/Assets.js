import React, { useState, useEffect } from 'react';
// react component that copies the given text inside your clipboard
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HeaderLight from 'components/Headers/HeaderLight.js';
import componentStyles from 'assets/theme/views/admin/assets.js';
import AssetForm from '../../components/Assets/Form';
import List from '../../components/Assets/List';
import { getAssets } from '../../actions/assets';
import { useDispatch } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(componentStyles);
const AssetsView = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const theme = useTheme();
  const [currentId, setCurrentId] = useState(0);
  const [isNew, setIsNew] = useState(false);
  const [msg, setMsg] = useState('');
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    dispatch(getAssets());
  }, [currentId, dispatch]);

  const setNotify = (str) => {
    setMsg(str);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <HeaderLight />
      {/* Page content */}
      <Container
        component={Box}
        marginTop='2rem'
        classes={{ root: classes.containerRoot }}
      >
        {!isNew && (
          <div style={{ textAlign: 'right', marginBottom: '15px' }}>
            <Button
              onClick={() => {
                setIsNew(true);
              }}
              variant='contained'
              style={{
                marginLeft: '15px',
                width: '20%',
              }}
              color='primary'
            >
              Add Asset
            </Button>
          </div>
        )}
        {currentId || isNew ? (
          <AssetForm
            currentId={currentId}
            setCurrentId={setCurrentId}
            setIsNew={setIsNew}
            setNotify={setNotify}
          />
        ) : (
          <Grid item xs={12} sm={12}>
            <List setCurrentId={setCurrentId} />
          </Grid>
        )}
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={
          <React.Fragment>
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={handleClose}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          </React.Fragment>
        }
      />
    </>
  );
};

export default AssetsView;
