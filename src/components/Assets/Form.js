import React, { useState, useEffect } from 'react';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import { createAsset, updateAsset } from '../../actions/assets';
import Switch from '@material-ui/core/Switch';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Form = ({ currentId, setCurrentId, setIsNew, setNotify }) => {
  const [assetData, setAssetData] = useState({
    assetId: '',
    status: '',
    biosName: '',
    deviceType: '',
    make: '',
    model: '',
    serialNo: '',
    assignedTo: '',
    deviceLocation: '',
    assignedDate: '',
    versionOS: '',
    isInstalledESET: true,
    isInstalledOffice365: true,
    lastServiced: '',
  });
  const asset = useSelector((state) =>
    currentId ? state.assets.find((message) => message._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (asset) setAssetData(asset);
  }, [asset]);

  const clear = () => {
    setCurrentId(0);
    setIsNew(false);
    setAssetData({
      assetId: '',
      status: '',
      biosName: '',
      deviceType: '',
      make: '',
      model: '',
      serialNo: '',
      assignedTo: '',
      deviceLocation: '',
      assignedDate: '',
      versionOS: '',
      isInstalledESET: false,
      isInstalledOffice365: false,
      lastServiced: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createAsset(assetData));
      setNotify('Asset created');
      clear();
    } else {
      dispatch(updateAsset(currentId, assetData));
      setNotify('Asset updated');
      clear();
    }
  };

  return (
    <>
      <Container
        maxWidth={false}
        component={Box}
        classes={{ root: classes.containerRoot }}
      >
        <Typography variant='h2' style={{ textAlign: 'center' }}>
          {currentId ? `Editing "${asset.assetId}"` : 'Creating Asset'}
        </Typography>
        <Paper className={classes.paper}>
          {' '}
          <form
            className={classes.root}
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit}
          >
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='assetId'
                  label='Asset ID'
                  variant='outlined'
                  fullWidth
                  value={assetData.assetId}
                  onChange={(e) =>
                    setAssetData({ ...assetData, assetId: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='status'
                  label='Status'
                  variant='outlined'
                  fullWidth
                  value={assetData.status}
                  onChange={(e) =>
                    setAssetData({ ...assetData, status: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='biosName'
                  label='BIOS Name'
                  variant='outlined'
                  fullWidth
                  value={assetData.biosName}
                  onChange={(e) =>
                    setAssetData({ ...assetData, biosName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='deviceType'
                  label='Device Type'
                  variant='outlined'
                  fullWidth
                  value={assetData.deviceType}
                  onChange={(e) =>
                    setAssetData({ ...assetData, deviceType: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='make'
                  label='Make'
                  variant='outlined'
                  fullWidth
                  value={assetData.make}
                  onChange={(e) =>
                    setAssetData({ ...assetData, make: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='model'
                  label='Model'
                  variant='outlined'
                  fullWidth
                  value={assetData.model}
                  onChange={(e) =>
                    setAssetData({ ...assetData, model: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='serialNo'
                  label='Serial No'
                  variant='outlined'
                  fullWidth
                  value={assetData.serialNo}
                  onChange={(e) =>
                    setAssetData({ ...assetData, serialNo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='deviceLocation'
                  label='Device Location'
                  variant='outlined'
                  fullWidth
                  value={assetData.deviceLocation}
                  onChange={(e) =>
                    setAssetData({
                      ...assetData,
                      deviceLocation: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='assignedTo'
                  label='Assigned To'
                  variant='outlined'
                  fullWidth
                  value={assetData.assignedTo}
                  onChange={(e) =>
                    setAssetData({ ...assetData, assignedTo: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='assignedDate'
                  label='Date Assigned'
                  variant='outlined'
                  fullWidth
                  value={assetData.assignedDate}
                  onChange={(e) =>
                    setAssetData({ ...assetData, assignedDate: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name='versionOS'
                  label='OS Version'
                  variant='outlined'
                  fullWidth
                  value={assetData.versionOS}
                  onChange={(e) =>
                    setAssetData({ ...assetData, versionOS: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name='lastServiced'
                  label='Last Serviced'
                  variant='outlined'
                  fullWidth
                  value={assetData.lastServiced}
                  onChange={(e) =>
                    setAssetData({ ...assetData, lastServiced: e.target.value })
                  }
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid
                item
                xs={6}
                style={{ paddingLeft: '30px', paddingTop: '25px' }}
              >
                Office 365 Installed ? {'  '}
                <Switch
                  checked={assetData.isInstalledOffice365}
                  onChange={(e) =>
                    setAssetData({
                      ...assetData,
                      isInstalledOffice365: e.target.checked,
                    })
                  }
                  color='primary'
                  name='isInstalledOffice365'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  paddingLeft: '30px',
                  paddingTop: '25px',
                  paddingBottom: '30px',
                }}
              >
                ESET Installed ? {'  '}
                <Switch
                  checked={assetData.isInstalledESET}
                  onChange={(e) =>
                    setAssetData({
                      ...assetData,
                      [e.target.name]: e.target.checked,
                    })
                  }
                  color='primary'
                  name='isInstalledESET'
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                item
                xs={12}
              >
                <Button onClick={clear} variant='contained'>
                  Cancel
                </Button>
                <Button
                  variant='contained'
                  style={{
                    marginLeft: '15px',
                    width: '20%',
                  }}
                  color='primary'
                  type='submit'
                >
                  {currentId ? `Update` : 'Save'}
                </Button>
              </Grid>
            </Grid>
            <div
              style={{ paddingTop: '15px', margin: 'auto', width: '50%' }}
            ></div>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
