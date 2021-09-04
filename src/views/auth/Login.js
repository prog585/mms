import React, { useState } from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
// @material-ui/icons components
import Email from '@material-ui/icons/Email';
import Lock from '@material-ui/icons/Lock';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin } from '../../actions/auth';

// core components
import componentStyles from 'assets/theme/views/auth/login.js';

const useStyles = makeStyles(componentStyles);
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(form, history));
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <>
      <Grid item xs={12} lg={5} md={7}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <Box
              color={theme.palette.gray[600]}
              textAlign='center'
              marginBottom='1rem'
              marginTop='.5rem'
              fontSize='1rem'
            ></Box>
            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='email'
                onChange={handleChange}
                name='email'
                placeholder='Email'
                startAdornment={
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='password'
                name='password'
                onChange={handleChange}
                placeholder='Password'
                startAdornment={
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              value='end'
              control={<Checkbox color='primary' />}
              label='Remeber me'
              labelPlacement='end'
              classes={{
                root: classes.formControlLabelRoot,
                label: classes.formControlLabelLabel,
              }}
            />
            <Box textAlign='center' marginTop='1.5rem' marginBottom='1.5rem'>
              <Button
                color='primary'
                variant='contained'
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Grid container component={Box} marginTop='1rem'>
          <Grid item xs={12} component={Box} textAlign='right'>
            <a
              href='#admui'
              onClick={(e) => e.preventDefault()}
              className={classes.footerLinks}
            >
              Forgot password
            </a>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
