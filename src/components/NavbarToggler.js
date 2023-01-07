import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

function NavbarToggler() {
  return (
    <div className='d-block d-md-none'>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="p-0">
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{width:'30%'}}
            >
              {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header> */}
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Link style={{textDecoration: 'none',color:'black',margin:'5px'}} to="/"><i className="fa-solid fa-house"></i> Home</Link>
                  <Link style={{textDecoration: 'none',color:'black',margin:'5px'}} to="blog"><i className="fa-solid fa-book-open"></i> Blog</Link>
                  <Link style={{textDecoration: 'none',color:'black',margin:'5px'}} to="contact"><i className="fa-regular fa-id-card"></i> Contact</Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item to="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item to="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item to="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarToggler



