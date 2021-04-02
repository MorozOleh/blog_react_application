import React, { useEffect } from 'react';
import Post from '../Post';
import {useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/actions/actionCreator';


function Posts() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.fetchedPosts);
  console.log(posts)

  useEffect(() => dispatch(fetchPosts()), []);

  return (
    <ul>
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
  )
}


export default Posts;




    
