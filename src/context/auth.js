import { useState, createContext } from 'react';
import React from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';


export const LoginContext = createContext();

function LoginProvider(props) {

  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  async function signup(username, password) {
    const response = await superagent
      .post(`${process.env.REACT_APP_SERVER_URL}/signup`)
      .send({
        'username': username,
        'password': password,
      })
      .catch(console.error);

    if (response.body.token) {
      setLoginState(true, response.body.token, response.body.user);
    } else {
      alert('oh no');
    }
  }

  async function signin(username, password) {
    const response = await superagent
      .post(`${process.env.REACT_APP_SERVER_URL}/signin`)
      .auth(username, password)
      .catch(console.error)

    if(response.body.token) {
      setLoginState(true, response.body.token, response.body.user);
    } else {
      alert('oh no');
    }
  }

  function setLoginState(loggedIn, token, user) {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setToken(token);
    setUser(user);
  }

  const logout = () => {
    setLoginState(false, null, {});
  };

  return (
    <LoginContext.Provider value={{
      loggedIn: loggedIn,
      token: token,
      user: user,
      signup: signup,
      signin: signin,
      logout: logout,
    }}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;