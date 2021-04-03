import React, { useEffect } from 'react';
import {
  useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { fetchPosts } from '../../redux/actions/actionCreator';
import { showModal } from '../../redux/actions/actionModal';
import { Modal } from '../Modal';
import { useStyles } from './PostsStyle';

import Button from '@material-ui/core/Button';
import Post from '../Post';

function Posts() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postsReducer.fetchedPosts);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isOpenComment = searchParams.get('_embed');
  
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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
      {!isOpenComment &&
        <Button
          variant="contained"
          className={classes.button}
          color="secondary"
          onClick={() => dispatch(showModal())}
        >
          Add new post
        </Button>
      }
      <Modal />
    </>
  )
};

export default Posts;
