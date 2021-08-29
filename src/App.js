import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import People from "./components/People/People";
import Chats from "./components/Chats/Chats";
import { Route, BrowserRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainet";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navigation />
        <div className="MainContent">
          <Route path="/Profile" render={() => <Profile />} />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path="/News" render={() => <News />}></Route>
          <Route path="/People" render={() => <People />}></Route>
          <Route path="/Chats" render={() => <Chats />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
