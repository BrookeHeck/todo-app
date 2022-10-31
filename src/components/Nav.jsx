import { Navbar, Button } from "@blueprintjs/core";

function Nav() {
  return (
    <Navbar className='bp4-navbar bp4-dark'>
      <Navbar.Group align='left'>
        <Navbar.Heading>To-Do List</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
      <Navbar.Group align="right">
        <Button className="bp4-minimal" icon="home" text="Home" />
        <Button className="bp4-minimal" icon="settings" text="Settings" />
      </Navbar.Group>
    </Navbar>
  )
}

export default Nav;