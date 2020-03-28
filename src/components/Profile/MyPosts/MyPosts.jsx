import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {


  let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return <div className={classes.postsBlock}>
    <h3>My posts</h3>
    <div>
      <div>
        <textarea ref={newPostElement} onChange={ onPostChange }  value={props.newMessage}/>
      </div>
      <div>
        <button onClick={ addPost }>Add post</button>
      </div>
    </div>
    <div className={classes.myPosts}>
      { postsElements }
    </div>
  </div>
}

export default MyPosts;