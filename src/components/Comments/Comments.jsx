import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostComments, deleteComments, fetchPosts } from '../../redux/actions/actionCreator'
import { Modal } from '../Modal';
import { showModal } from '../../redux/actions/actionCreator';
import { useStyles } from './CommentsStyle';

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import DeleteIcon  from '../../../node_modules/@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export function Comments() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const {postId} = +useParams().match;

  useEffect(() => dispatch(getPostComments(postId)), [])

  const comments = useSelector(
    state => state.commentsReducer.fetchedComments
  );

  const goMainPage = () => {
    history.push('/');
    dispatch(fetchPosts())
  }

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
                    postId
                  }))}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <div className={classes.wrapper}>
        <ButtonGroup
          size="large"
          color="primary"
          aria-label="large outlined primary button group"
        >
          <Button
            onClick={() => dispatch(showModal())}
          >
            Add new comment
          </Button>
          <Button
            onClick={goMainPage}
          >
            Main page
          </Button>
        </ButtonGroup>
      </div>
      <Modal />
    </>
  )
}
