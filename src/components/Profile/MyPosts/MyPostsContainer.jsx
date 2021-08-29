import { AddNewPostActionCreator } from "../../../redux/store";
import { UpdateNewPostTextActionCreator } from "../../../redux/store";
import MyPosts from "./MyPosts";
import storeContext from "../../../storeContext";
import store from "../../../redux/redux-store";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    NewPostText: state.profilePage.NewPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(AddNewPostActionCreator(text));
    },
    onPostChange: (text) => {
      dispatch(UpdateNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
