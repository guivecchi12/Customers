import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import createUser from './store/user';

import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
function App() {  

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()
    createUser(name, age)
  }

  const classes = useStyles();
  return (
    <div>
      <form onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
        <TextField onInput = {(e) => setName(e.target.value)} id="standard-basic" label="Name" />
        <TextField onInput = {(e) => setAge(e.target.value)} id="filled-basic" label="Age" variant="filled" />
        <Button type = "submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </div>
  );
}

export default App;
