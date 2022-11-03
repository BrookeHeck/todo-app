import React from 'react';
import LoginProvider from './context/auth.js';
import SettingsProvider from './context/settings.js';
import ToDo from './components/todo.jsx';
import './styles/app.css';


export default class App extends React.Component {
  render() {
    return (
      <LoginProvider>
        <SettingsProvider>
          <ToDo />
        </SettingsProvider>
      </LoginProvider>
    );
  }
}