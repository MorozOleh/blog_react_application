import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { getPostComments, deleteComments } from '../../redux/actions/actionCreator'
import { Modal } from '../Modal';
import { showModal } from '../../redux/actions/actionCreator';
import Card from '@material-ui/core/Card';
import DeleteIcon  from '../../../node_modules/@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  item: {
    listStyle: 'none'
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export function Comments() {
  const classes = useStyles();

  const match = useParams()
  const dispatch = useDispatch();
  useEffect(() => dispatch(getPostComments(+match.postId)), [])

  const comments = useSelector(
    state => state.commentsReducer.fetchedComments
  );

  return (
    <>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className={classes.item}>
        <Card className={classes.root} variant="outlined">
          <CardContent>

            <Typography className={classes.pos} color="textSecondary">
              {comment.body}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
                  onClick={() => dispatch(deleteComments({
                    id: comment.id,
                    postId: + match.postId
                  }))}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      </li>
        ))}
      </ul>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(showModal())}
      >
        Add new post
      </Button>
      <Modal />
    </>
  )
}
