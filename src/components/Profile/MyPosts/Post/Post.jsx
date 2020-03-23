import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src='https://www.forward.bank/wp-content/themes/BankSiteResponsive_2017/img/logo.png'/>
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;