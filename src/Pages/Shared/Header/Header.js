import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar
      className="mb-3"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontVariant: "small-caps",
            }}
            to="/"
          >
            Dragon{" "}
            <b>
              <span style={{ color: "tomato" }}>News</span>
            </b>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
          <Nav>
            <Nav.Link
              style={{ color: "white", fontWeight: "700" }}
              className="mt-2"
              href="#deets"
            >
              {user?.displayName}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {user?.photoURL ? (
                <Image
                  style={{ height: "40px" }}
                  roundedCircle
                  src={user?.photoURL}
                ></Image>
              ) : (
                <FaUserAlt></FaUserAlt>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
