import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, value: "Здоров , шо робиш?", likes: 0 },
        {
          id: 2,
          value: "Позич 300 гривень , з зарплати віддам",
          likes: 0,
        },
        { id: 3, value: "Чо ігнориш , чорт?", likes: 0 },
      ],
      NewPostText: "",
    },
    dialogPage: {
      dialogData: [
        { id: 1, name: "Zed4Shadow" },
        { id: 2, name: "PudgeLox" },
        { id: 3, name: "AngelUbiyca" },
        { id: 4, name: "Zed4Shadow" },
      ],
      messagesData: [
        { id: 1, value: "Порошенко брата вбив" },
        { id: 2, value: "Ало , параша , го лол" },
        { id: 3, value: "Тарасе , вас звільнено за системні прогули" },
        { id: 4, value: "А ти точно позашлюбний син Степана Гіги?" },
      ],
      NewMessageText: "",
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  getState() {
    return this._state;
  },

  addNewPost(postMessage) {
    let newPost = {
      id: this._state.profilePage.postData.length + 1,
      value: postMessage,
      likes: Math.random() * (100000 - 20) + 20,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.NewPostText = "";
    this._callSubscriber(this._state, this.addNewPost, this.addNewMessage);
  },

  updateNewPostText(newText) {
    this._state.profilePage.NewPostText = newText;
    this._callSubscriber(this._state, this.addNewPost, this.addNewMessage);
  },

  addNewMessage(dialogMessage) {
    let newMassage = {
      id: 100,
      value: dialogMessage,
    };
    this._state.dialogPage.messagesData.push(newMassage);
    // rerenderEntireTree(state, addNewPost, addNewMessage);
  },

  dispatch(action) {
    profileReducer(action, this._state.profilePage);
    dialogReducer(action, this._state.dialogPage);
    this._callSubscriber(this._state, this.addNewPost, this.addNewMessage);
  },
};

export const AddNewPostActionCreator = (text) => {
  return {
    type: "ADD-NEW-POST",
    postMessage: text,
  };
};

export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: text,
  };
};

export const UpdateNewMessageTextActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: text,
  };
};

export const AddNewMessageActionCreator = (text) => {
  return {
    type: "ADD-NEW-MESSAGE",
    message: text,
  };
};

export default store;
