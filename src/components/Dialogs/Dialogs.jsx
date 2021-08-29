import React, { createRef } from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogItem";
import { UpdateNewMessageTextActionCreator } from "../../redux/store";
import { AddNewMessageActionCreator } from "../../redux/store";

const Dialogs = (props) => {
  let state = props.dialogPage;
  let dialogElement = props.dialogData.map((message) => (
    <DialogItem id={message.id} name={message.name} />
  ));
  let messagesElement = props.messagesData.map((message) => (
    <Message id={message.id} value={message.value} />
  ));

  let NewMessageElement = React.createRef();
  let OnMessageChange = () => {
    let text = NewMessageElement.current.value;
    props.UpdateNewMessageText(text);
  };
  let addMessage = () => {
    let text = NewMessageElement.current.value;
    props.AddNewMessage(text);
  };
  return (
    <div className={classes.dialogsWrapper}>
      <div className={classes.dialogsList}> {dialogElement}</div>
      <div className={classes.messageBar}>
        {" "}
        {messagesElement}
        <textarea ref={NewMessageElement} onChange={OnMessageChange}></textarea>
        <button onClick={addMessage}>відправити</button>
      </div>
    </div>
  );
};
export default Dialogs