import React, { createRef } from "react";
import DialogItem from "./DialogsItem/DialogItem";
import { UpdateNewMessageTextActionCreator } from "../../redux/store";
import { AddNewMessageActionCreator } from "../../redux/store";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogPage: this.state.dialogPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    OnMessageChange: (text) => {
      dispatch(UpdateNewMessageTextActionCreator(text));
    },
    addMessage: (text) => {
      dispatch(AddNewMessageActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
