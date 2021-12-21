import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

const Login = ()=> {
  return(<h2>Login</h2>)
}

const FriendsList = ()=> {
  return(<h2>FriendsList</h2>)
}
const AddFriend = ()=> {
  return(<h2>FriendsList</h2>)
}

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path = "/">
        <Login />
      </Route>
      <Route exact path = "/login">
        <Redirect to="/" />
      </Route>
      <Route exact path = "/friends">
        <FriendsList />
      </Route>
      <Route exact path = "/friends/add">
        <AddFriend />
      </Route>
      <h2>Client Auth Projects</h2>
    </div>
    </Router>
  );
}

export default App;
