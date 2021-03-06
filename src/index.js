import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import { Provider } from "react-redux";

let rerenderEntireTree = (state, addNewPost, addNewMessage) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
rerenderEntireTree(store.getState(), store.addNewPost, store.addNewMessage);

store.subscribe(rerenderEntireTree);
