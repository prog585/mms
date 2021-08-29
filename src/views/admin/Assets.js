import React, { useState } from 'react';
// react component that copies the given text inside your clipboard
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HeaderLight from 'components/Headers/HeaderLight.js';
import componentStyles from 'assets/theme/views/admin/assets.js';
import AssetForm from '../../components/Assets/Form';
import List from '../../components/Assets/List';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(componentStyles);
const Icons = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [copiedText, setCopiedText] = useState();
  const [currentId, setCurrentId] = useState(0);
  return (
    <>
      <HeaderLight />
      {/* Page content */}
      <Container
        maxWidth={false}
        component={Box}
        marginTop='2rem'
        classes={{ root: classes.containerRoot }}
      >
        <AssetForm currentId={currentId} setCurrentId={setCurrentId} />
        <Grid item xs={12} sm={7}>
          <List setCurrentId={setCurrentId} />
        </Grid>
      </Container>
    </>
  );
};

export default Icons;
