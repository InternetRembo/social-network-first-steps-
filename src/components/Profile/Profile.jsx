import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <div>
        <img
          className={classes.top_img}
          src="https://edaplus.info/directory-herbs/images/chamomile.jpg"
        ></img>
      </div>

      <div className={classes.UserInformation}>ava + info</div>

      <MyPostsContainer />
    </div>
  );
};
export default Profile;