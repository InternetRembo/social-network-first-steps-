import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { AddNewPostActionCreator } from "../../../redux/store";
import { UpdateNewPostTextActionCreator } from "../../../redux/store";

const MyPosts = (props) => {
  let PostsElements = props.postData.map((post) => (
    <Post massage={post.value} />
  ));
  let newPostElemtnt = React.createRef();

  let addPost = () => {
    let text = newPostElemtnt.current.value;
    props.AddNewPost(text);
  };
  let onPostChange = () => {
    let text = newPostElemtnt.current.value;
    props.UpdateNewPostText(text);
  };
  return (
    <div>
      <div className={classes.newPostInput}>
        <div>
          <textarea
            ref={newPostElemtnt}
            onChange={onPostChange}
            value={props.NewPostText}
          ></textarea>
        </div>
        <div className={classes.buttonPost}>
          <button onClick={addPost}>Опублікувати</button>
        </div>
      </div>
      <div className={classes.postsContainer}>{PostsElements}</div>
    </div>
  );
};
export default MyPosts