import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost, addComment, updatePost} from '../../redux/actions/actionCreator';
import { hideModal} from '../../redux/actions/actionModal';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { useStyles } from './FormStyle';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

export function Form() {

  
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const location = useLocation();
  const history = useHistory()
  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_embed');
  const isEditPost = searchParams.get('post');
  const match = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const onInputsChanged = (event) => {
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
    setBody('');

    if (isEditPost) {
      toast.success('You have successfully updated your post');
      dispatch(updatePost(+match.postId, { title, body }));
      dispatch(hideModal());
      history.push('/');
      setTitle('');

      return;
    }
    
    if (isOpenComment && body) {
      toast.success('You have successfully added your comment');
      dispatch(addComment({ postId: +match.postId, body }));
      dispatch(hideModal());

      return;
    };
    
    if (title && body) {
      toast.success('You have successfully added your post');
      dispatch(addPost({ title, body }));
      dispatch(hideModal());
      setTitle('');

      return;
    };

    toast.warn('Upps you have forgotten to fill all fields')
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      {!isOpenComment &&
        <div>
          <TextField
            label="Type your title"
            id="filled-size-normal"
            value={title}
            name="title"
            variant="filled"
            onChange={onInputsChanged}
          />
        </div>
      }

      <div>
        <TextField
          label={!isOpenComment
            ? "Type your description"
            : "Type your comment"
          }
          id="filled-size-normal"
          value={body}
          name="body"
          variant="filled"
          onChange={onInputsChanged}
        />
      </div>
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
