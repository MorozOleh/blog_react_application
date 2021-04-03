import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { deletePosts, getPost } from '../../redux/actions/actionCreator';
import { Link, useLocation } from 'react-router-dom';
import { Comments } from '../Comments';

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
              onClick={() => dispatch(deletePosts(id))}
            >
              Delete
            </Button>
            <Link
              to={`/${id}?_embed=comments`}
              onClick={() => {dispatch(getPost(id))}}
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
