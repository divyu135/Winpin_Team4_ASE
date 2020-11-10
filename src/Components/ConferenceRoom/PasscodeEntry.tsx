import React, { ChangeEvent, useState, FormEvent, Fragment } from 'react';

import Button from '@material-ui/core/Button';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import { InputLabel, Theme } from '@material-ui/core';
import PassIntroContainer from './PassIntroContainer';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  googleButton: {
    background: 'white',
    color: 'rgb(0, 94, 166)',
    borderRadius: '4px',
    border: '2px solid rgb(2, 122, 197)',
    margin: '1.8em 0 0.7em',
    textTransform: 'none',
    boxShadow: 'none',
    padding: '0.3em 1em',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    '&:hover': {
      background: 'white',
      boxShadow: 'none',
    },
  },
  errorMessage: {
    color: 'red',
    display: 'flex',
    alignItems: 'center',
    margin: '1em 0 0.2em',
    '& svg': {
      marginRight: '0.4em',
    },
  },
  gutterBottom: {
    marginBottom: '1em',
  },
  passcodeContainer: {
    minHeight: '120px',
  },
  submitButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

export default function PasscodeEntry() {
  const classes = useStyles();
  // const { signIn, user, isAuthReady } = useAppState();
  const history = useHistory();
  const location = useLocation<{ from: Location }>();
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState<Error | null>(null);
  // const dbpass = useState('');
  const [dbpass, setDbpass] = useState('');
  

  // const isAuthEnabled = Boolean(process.env.REACT_APP_SET_AUTH);

  function setDbPasscode() {
    fetch('/token/password')
      .then(res => res.text())
      .then(res => setDbpass(res));
  }

  function login() {
    setAuthError(null);
    setDbPasscode();

    if (passcode === dbpass){
        history.replace(location?.state?.from || { pathname: '/video-app' });
      }
    else { 
      alert("Wrong Passcode"); 
    };
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login();
  }



  return (
    <Fragment>
    <PassIntroContainer>
      
    <Typography variant="h5" className={classes.gutterBottom}>
            Enter passcode to join a room
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container justify="space-between">
              <div className={classes.passcodeContainer}>
                <InputLabel shrink htmlFor="input-passcode">
                  Passcode
                </InputLabel>
                <TextField
                  id="input-passcode"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPasscode(e.target.value)}
                  type="password"
                  variant="outlined"
                  size="small"
                />
                <div>
                  {authError && (
                    <Typography variant="caption" className={classes.errorMessage}>
                      <ErrorOutlineIcon />
                      {authError.message}
                    </Typography>
                  )}
                </div>
              </div>
            </Grid>
            <Grid container justify="flex-end">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={!passcode.length}
                className={classes.submitButton}
              >
                Submit
              </Button>
            </Grid>
          </form>
    </PassIntroContainer>
    </Fragment>
  );
}
