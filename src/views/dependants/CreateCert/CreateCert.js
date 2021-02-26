import React, { useState, useCallback } from 'react';
import { TextField, Paper, Typography, Button, Grid, makeStyles } from '@material-ui/core';
import { CertAPI } from 'helpers';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.dark,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  loginBox: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(10)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  buttons: {
    marginTop: theme.spacing(1)
  },
  developMessage: {
    position: 'absolute',
    bottom: '2vh'
  }
}));

export const CreateCert = () => {
  const [studentId, setStudentId] = useState('');
  const [unitCode, setUnitCode] = useState('');
  const [mark, setMark] = useState('');
  const [credit, setCredit] = useState('');
  const [period, setPeriod] = useState('');

  const [pageHeading] = useState('Create Certificate');
  const classes = useStyles();


  const performCreateCert = async () =>{
    let certDetails = {
      studentId,
      unitCode,
      mark,
      credit,
      period
    };

    let apiResponse = await CertAPI.create(certDetails);
    // if (apiResponse.success) {
    console.log(apiResponse.data.message);
    // }
  };

  return (
    <Grid container justify='flex-start' direction='column' alignItems='center'>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          {pageHeading}
        </Typography>
        <form noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="studentId" label="Student ID" name="studentId" onChange={e => setStudentId(e.target.value)} autoFocus pattern="[0-9]{9}"/>
          <TextField variant="outlined" margin="normal" required fullWidth name="unitCode" label="Unit Code" type="text" id="unitCode" onChange={e => setUnitCode(e.target.value)} pattern="[A-Za-z]{3}[0-9]{3}"/>
          <TextField variant="outlined" margin="normal" required fullWidth name="mark" label="Mark" type="text" id="mark" onChange={e => setMark(e.target.value)} />
          <TextField variant="outlined" margin="normal" required fullWidth name="credit" label="Credit Point(s)" type="text" id="credit" onChange={e => setCredit(e.target.value)} />
          <TextField variant="outlined" margin="normal" required fullWidth name="period" label="Learning Period" type="text" id="period" onChange={e => setPeriod(e.target.value)} />
          
          <Button fullWidth variant="contained" color="primary" className={classes.buttons} onClick={performCreateCert}>Create</Button>
        </form>
      </Paper>

    </Grid>);
};
