import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";
import "./Header.css";

const Header = () => {
  
  const [user] = useAuthState(auth);

  /* if(user){
    console.log(user)
    toast.success('Successfully created!!! from header', {
      duration: 4000,
      style: {
          background:'black',
          color: 'white'
      },
  });
  } */

  const handleSignOut = () => {
    signOut(auth);
    toast.success("Successfully Logout!!!", {
      duration: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };


  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width={90} height={30} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user?.uid ? (
                <>
                  <Nav.Link as={Link} to="">
                    {user?.photoURL && (
                      <img
                        className="rounded-circle logo"
                        src={user?.photoURL}
                        alt=""
                      />
                    )}
                  </Nav.Link>
                  <Nav.Link as={Link} to="">
                    {user?.displayName ? user?.displayName : ""}
                  </Nav.Link>
                  <Nav.Link onClick={handleSignOut} as={Link} to="/login">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
