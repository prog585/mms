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
import School from '@material-ui/icons/School';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../actions/auth';

// core components
import componentStyles from 'assets/theme/views/auth/register.js';

const useStyles = makeStyles(componentStyles);
const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [form, setForm] = useState(initialState);
  const theme = useTheme();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(signup(form, history));
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Grid item xs={12} lg={6} md={8}>
        <Card classes={{ root: classes.cardRoot }}>
          <CardContent classes={{ root: classes.cardContent }}>
            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1.5rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='text'
                name='firstName'
                onChange={handleChange}
                placeholder='First Name'
                startAdornment={
                  <InputAdornment position='start'>
                    <School />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1.5rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='text'
                name='lastName'
                onChange={handleChange}
                placeholder='Last Name'
                startAdornment={
                  <InputAdornment position='start'>
                    <School />
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1.5rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='email'
                name='email'
                onChange={handleChange}
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
              marginBottom='1.5rem!important'
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

            <FormControl
              variant='filled'
              component={Box}
              width='100%'
              marginBottom='1.5rem!important'
            >
              <FilledInput
                autoComplete='off'
                type='password'
                name='confirmPassword'
                onChange={handleChange}
                placeholder='Confirm Password'
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
              label={
                <>
                  I agree with the{' '}
                  <Box
                    color={theme.palette.primary.main}
                    component='a'
                    textDecoration='none'
                  >
                    Privacy Policy
                  </Box>
                </>
              }
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
                Create account
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Register;
