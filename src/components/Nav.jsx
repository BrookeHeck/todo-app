import { Navbar, Button } from "@blueprintjs/core";
import { useState, useContext } from 'react';
import { LoginContext } from "../context/auth";
import SettingsForm from './SettingsForm';
import { When } from 'react-if';
import LoginForm from "./LoginForm";

function Nav() {
  const context = useContext(LoginContext);
  const [showSettingsForm, setShowSettingsForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [action, setAction] = useState('signup');

  return (
    <>
      <Navbar className='bp4-navbar bp4-dark'>
        <Navbar.Group align='left'>
          <Navbar.Heading>To-Do List</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>

        <When condition={context.loggedIn}>
          <Navbar.Group align="right">
            <Button className="bp4-minimal" text="Logout" onClick={context.logout} />
            <Button
              className="bp4-minimal"
              icon="settings"
              text="Settings"
              onClick={() => setShowSettingsForm(true)}
            />
          </Navbar.Group>
        </When>

        <When condition={!context.loggedIn} >
          <Button className="bp4-minimal" text="Sign Up" onClick={() => {
            setShowLoginForm(true);
            setAction('signup');
          }} />
          <Button className="bp4-minimal" text="Sign In" onClick={() => {
            setShowLoginForm(true);
            setAction('signin');
          }} />
        </When>

        <When condition={showLoginForm}>
          <div>
            <LoginForm action={action} setShowLoginForm={setShowLoginForm} />
          </div>
        </When>

      </Navbar>
      {
        showSettingsForm && <SettingsForm setShowSettingsForm={setShowSettingsForm} />
      }
    </>
  )
}

export default Nav;