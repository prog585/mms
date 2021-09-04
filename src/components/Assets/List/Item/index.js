import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { deleteAsset } from '../../../../actions/assets';
import useStyles from './styles';

const Item = ({ asset, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          asset.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title={asset.assetId}
      />
      <div className={classes.overlay}>
        <Typography variant='body2'> {asset.deviceType}</Typography>
        <Typography variant='h5'>
          {moment(asset.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2} style={{ marginRight: '10px' }}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(asset._id)}
        >
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>
          Make: {asset.make}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='h2'>
          Model: {asset.model}
        </Typography>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        Status: {asset.status}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {' '}
          Assigned To: {asset.assignedTo}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            dispatch(deleteAsset(asset._id));
          }}
        >
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
