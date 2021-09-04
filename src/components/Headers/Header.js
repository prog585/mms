import React, { useEffect } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons components
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import GroupAdd from '@material-ui/icons/GroupAdd';
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined';
import PieChart from '@material-ui/icons/PieChart';
import { useDispatch } from 'react-redux';
import { getAssets } from '../../actions/assets';

// core components
import CardStats from 'components/Cards/CardStats.js';

import componentStyles from 'assets/theme/components/header.js';

const useStyles = makeStyles(componentStyles);

const Header = (assets) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const theme = useTheme();
  var assetsCount = Object.keys(assets.assets).length;
  useEffect(() => {
    dispatch(getAssets());
  }, [dispatch]);
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle='New Devices'
                  title={assetsCount}
                  icon={InsertChartOutlined}
                  color='bgError'
                  footer={
                    <>
                      <Box
                        component='span'
                        fontSize='.875rem'
                        color={theme.palette.success.main}
                        marginRight='.5rem'
                        display='flex'
                        alignItems='center'
                      ></Box>
                      <Box component='span' whiteSpace='nowrap'>
                        Since last month
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle='New users'
                  title='0'
                  icon={PieChart}
                  color='bgWarning'
                  footer={
                    <>
                      <Box component='span' whiteSpace='nowrap'>
                        Since last week
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle='Support'
                  title='0'
                  icon={GroupAdd}
                  color='bgWarningLight'
                  footer={
                    <>
                      <Box component='span' whiteSpace='nowrap'>
                        Resolved Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle='Pending'
                  title='0'
                  icon={EmojiEvents}
                  color='bgInfo'
                  footer={
                    <>
                      <Box component='span' whiteSpace='nowrap'>
                        Pending Since yesterday
                      </Box>
                    </>
                  }
                />
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
