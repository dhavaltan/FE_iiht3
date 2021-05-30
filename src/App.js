import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router-dom";

import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ChangePasswordPage from './components/ChangePasswordPage';
import ViewProfilePage from './components/ViewProfilePage';
import TweetReplyPage from './components/TweetReplyPage';
import HomePage from './components/HomePage';
import AysncSelect from 'react-select/async'
import { createBrowserHistory } from "history";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import authService from './services/auth.service';
import userService from './services/user.service';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [searchuserText, setSearchUserText] = useState('')
  const history = createBrowserHistory();

  const debounce = (fn, delay) => {
  
     let timeoutID;
     return (...args) => {
    
       if (timeoutID) {
         clearTimeout(timeoutID);
       }
       timeoutID = setTimeout(() => {
         fn(...args)
       }, delay )
    }
 }

  const loadUserSuggestions = (searchUserText, callback) => {

    debounce(() => {
      userService.searchUser(searchUserText).then(response => {
        response.data.length > 0 ? callback(response.data.map(i => ({ label: i.username, value: i.username }))) : callback([])
      });
    
     },1000)()
  }
    
  const handleInputChange = (newValue) => {
    const inputValue = newValue.replace(/\W/g, '');
    setSearchUserText(inputValue)
    return inputValue;
  };

  const onSelect = (obj) => {
    history.push(`/view-profile/${obj.value}`)
    
  }

  useEffect(() => {
    const user = authService.getCurrentUser();
    if(user){
      setCurrentUser(user)
    }
  }, [])
  const logOut = ()=> {
    authService.logout();
    window.location.reload();
  }
  
  return (
    <Router history={history}>
      <div>
        <nav style={{
          width:'100%',
        }}>
          <ul>
                 {
              !currentUser ? (
                <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
              </>
                ):(
                    <>
            <li >
              <Link to="/home">Home</Link>
            </li>
            
            <li>
              <Link to="/login" onClick={logOut}>Logout</Link>
                    </li>
                   
            </>
                )
              
}
          </ul>
          <AysncSelect
                        
                        onInputChange={handleInputChange}
                        placeholder={'Search User'}
            loadOptions={loadUserSuggestions}
            
              onChange={onSelect}
                      />

        </nav>
              <Switch>
            {
              !currentUser ? (
                <>
              <Route exact path={["/","/login"]} component={LoginPage} />
              
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route path="/">
                  <Redirect to="/login" />
                </Route>
              </>
              ):(
                <>
                <Route exact path={["/", "/home"]} component={HomePage} />
                <Route path="/change-password">
                  <ChangePasswordPage />
                </Route>
                <Route path="/tweet-reply">
                  <TweetReplyPage />
                </Route>
                <Route path="/view-profile/:id">
                  <ViewProfilePage />
                </Route>
                <Route path="/">
                  <Redirect to="/home" />
                </Route>

                </>
              )
            }
        </Switch>
        </div>
    </Router>
  );
}
export default App;
