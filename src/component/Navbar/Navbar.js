import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import dlogo from "../../images/logo.png";
import "./Navbar.css";
import { auth } from "../../firebase-init";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // User is signed in, see docs for a list of available properties

        // ...
      } else {
        setUser({});
        // User is signed out
        // ...
      }
    });
  }, []);
  const hangleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Navbar className="container" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img className="w-50" src={dlogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/Blog"}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to={"/CheckOut"}>
              CheckOut
            </Nav.Link>

            {user?.uid ? (
              <Button onClick={hangleLogOut} variant="success">
                SignOut
              </Button>
            ) : (
              <Button
                className="gap-left"
                as={Link}
                to={"/SignUp"}
                variant="success"
              >
                SignIn
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <nav>
    //   <div className="navbar">
    //     <Link className="logo-link" to="/">
    //       Navbar
    //     </Link>
    //     {/* <div className="menu-icon" onClick={handbleClick}>
    //       <img src={!clicked ? menu : menu} alt="/>
    //     </div> */}
    //     <div>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "Active-link" : "link")}
    //         to="/"
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "Active-link" : "link")}
    //         to="/Blog"
    //       >
    //         Blog
    //       </NavLink>
    //       <NavLink
    //         className={({ isActive }) => (isActive ? "Active-link" : "link")}
    //         to="/Services"
    //       >
    //         Services
    //       </NavLink>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Header;
