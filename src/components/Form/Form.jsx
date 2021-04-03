import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { hideModal, addPost, addComment, getPostComments } from '../../redux/actions/actionCreator';
import { useLocation, useParams } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_embed');
  const match = useParams()

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(hideModal())
    setBody('');
    
    if (isOpenComment) {
      dispatch(addComment({
        postId: +match.postId,
        body,
      }))
      
      return;
    }

    dispatch(addPost({ title, body }))
    setTitle('')
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      {!isOpenComment && <>
        <div>
        <TextField
          label="Type your title"
          id="filled-size-normal"
          value={title}
          name="title"
          variant="filled"
          onChange={handleInput}
        />
      </div>
      <div>
        <TextField
          label="Type here"
          id="filled-size-normal"
          value={body}
          name="body"
          variant="filled"
          onChange={handleInput}
        />
        </div>
      </> }
      { isOpenComment && <div>
        <TextField
          label="Type comment"
          id="filled-size-normal"
          value={body}
          name="body"
          variant="filled"
          onChange={handleInput}
        />
        </div>
      }
      <div>
        <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        startIcon={<SaveIcon />}
      >
        Save
      </Button>
      </div>
    </form>
  );
};
