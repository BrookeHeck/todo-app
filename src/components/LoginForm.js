import { useContext } from "react";
import { LoginContext } from "../context/auth";
import { Label, FormGroup, Button } from '@blueprintjs/core'

function LoginForm({ action, setShowLoginForm }) {
  const context = useContext(LoginContext);

  function handleSubmit(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    action === 'signup' ?
    context.signup(username, password) : context.signin(username, password);

    setShowLoginForm(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>
          <span>username</span>
          <input name="username" type="username" />
        </Label>

        <Label>
          <span>Password</span>
          <input name="password" type="password" />
        </Label>
      </FormGroup>
      <Button type="submit" text="submit" />
    </form>
  )
}

export default LoginForm;