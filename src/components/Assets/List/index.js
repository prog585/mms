import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Item from './Item';
import useStyles from './styles';

const List = ({ setCurrentId }) => {
  const assets = useSelector((state) => state.assets);
  const classes = useStyles();

  return !assets.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {assets.map((asset) => (
        <Grid key={asset._id} item xs={12} sm={6} md={6}>
          <Item asset={asset} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
