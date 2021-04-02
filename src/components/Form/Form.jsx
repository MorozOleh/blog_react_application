import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import { hideModal } from '../../redux/actions/actionCreator';




const useStyles = makeStyles((theme) => ({
  root: {
    background: 'white',
    padding: 50,
    borderRadius: 15,

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
  },
  button: {
    display: 'flex',
    margin: '0 auto'
  }
}));

export function Form() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('')
  const classes = useStyles();

  const handleInput = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;
      
      case 'body':
        setBody(value)
        break;
      
      default:
        return;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(hideModal())

  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>

      <div>
        <TextField
          label="Size"
          id="filled-size-normal"
          value={title}
          name="title"
          variant="filled"
          onChange={handleInput}

        />
      </div>
      <div>
        <TextField
          label="Size"
          id="filled-size-normal"
          value={body}
          name="body"
          onChange={handleInput}
          variant="filled"
        />
      </div>
      <div>
        <Button
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        className={classes.button}
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </div>

    </form>
  );
}