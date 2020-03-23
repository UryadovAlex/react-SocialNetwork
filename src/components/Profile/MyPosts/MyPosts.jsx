import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      New Post
    </div>
    <div className={classes.myPosts}>
      <Post message='Hi, how are you?' likecount='10'/>
      <Post message="It's my first post" likecount='20'/>
    </div>
  </div>
}

export default MyPosts;