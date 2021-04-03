import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePosts, fetchPostById } from '../../redux/actions/actionCreator';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Comments } from '../Comments';
import { useStyles } from './PostStyle';

import Card from '@material-ui/core/Card';
import DeleteIcon  from '../../../node_modules/@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


export default function Post({
  title,
  body,
  id
}) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_embed');
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory()

  const handleComments = (id) => {
    dispatch(fetchPostById(id))
  }

  const handleDelete = (id) => {
    dispatch(deletePosts(id));
    history.push('/');
  }

  return (
    <>
      <li className={classes.item}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {title}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              {body}
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
            <Link
              to={`/${id}?_embed=comments`}
              onClick={() => handleComments(id)}
            >
              Comments
              </Link>
          </CardContent>
        </Card>
      </li>
      {isOpenComment && < Comments />}
    </>
  )
};
