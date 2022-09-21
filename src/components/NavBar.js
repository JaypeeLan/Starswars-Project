import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  NotificationIcon,
  LineIcon,
  ProfileIcon,
  BreadCrumbIcon,
  Arrow,
} from "../Images/SvgIcons";

const Index = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand
          as={"button"}
          className="btn btn-light p-0"
          onClick={() => navigate(-1)}
        >
          <Arrow />
          Back
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Nav.Link href="" disabled>
            <NotificationIcon />
          </Nav.Link>
          <Nav.Link href="" disabled>
            <LineIcon />
          </Nav.Link>
          <Nav.Link href="" disabled>
            <ProfileIcon />
          </Nav.Link>
          <Nav.Link href="" disabled>
            John Doe
          </Nav.Link>
          <Nav.Link href="" disabled>
            <BreadCrumbIcon />
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Index;
