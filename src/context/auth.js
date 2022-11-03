import { useState, createContext, useEffect } from 'react';
import React from 'react';
import cookie from 'react-cookies';
import superagent from 'superagent';


export const LoginContext = createContext();

function LoginProvider(props) {

  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ token, setToken ] = useState('');
  const [ user, setUser ] = useState({});

  async function signup(username, password) {
    const response = await superagent
      .post(`${process.env.REACT_APP_SERVER_URL}/signup`)
      .send({
        'username': username,
        'password': password,
      })
      .catch(console.error);
      console.log(response);
  }

  async function signin(username, password) {
    console.log(username, password);
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



  // componentDidMount() {
  //   const qs = new URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = qs.get('token') || cookieToken || null;
  //   this.validateToken(token);
  // }

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