import React, { useEffect } from 'react';
import {
  useDispatch, useSelector
} from 'react-redux';
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { fetchComments, fetchPosts } from '../../redux/actions/actionCreator';
import { showModal } from '../../redux/actions/actionCreator';

import { Modal } from '../Modal';
import Button from '@material-ui/core/Button';
import Post from '../Post';

const useStyles = makeStyles({
  button: {
    margin: '20px auto 0',
    display: 'block'
  },

  list: {
    margin: 0
  }
})

function Posts() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_embed');
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(posts)
  return (
    <>
      <ul className={classes.list}>
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        )
        )}
      </ul>
      {!isOpenComment && <Button
        variant="contained"
        className={classes.button}
        color="secondary"
        onClick={() => dispatch(showModal())}
      >
        Add new post
      </Button>}
      <Modal />
    </>
  )
};

export default Posts;
