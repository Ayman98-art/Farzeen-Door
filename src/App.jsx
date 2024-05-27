import './App.css';

import farzaa_logo from './assets/logo.webp'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Headroom from 'react-headroom';
import { useEffect, useState } from 'react';


export default function App() {
const [loading, setLoading] = useState(true);

useEffect(() => {
setTimeout(() => {
  setLoading(false) }, 2500);
}, []);

  return (
  <>
    {
  loading ? <div></div> 
    :
  <>
  <Navbar expand="lg" className="bg-dark">
    <Container fluid className='px-5' p="true">
      <NavLink href="mailto:info@webmail.com">
      <FontAwesomeIcon icon={faEnvelopeOpen}/>
        info@webmail.com
        </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">

        <Nav
          className="m-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <p className='mb-0'>SALE: 400+ products up to 70% off. Shop Now</p>
        </Nav>

      <ul className='d-flex pt-3 listSocial'>
        <li>
          <a href='#facebook'>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="10" viewBox="0 0 320 512">
              <path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
            </svg>
          </a>
        </li>

        <li>
          <a href='#twitter-X'>
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="16" viewBox="0 0 512 512">
              <path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
            </svg>
          </a>
        </li>

        <li>
          <a href='#instgram'>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="14" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </a>
        </li>

        <li>
          <a href='#youtube'>
            <svg xmlns="http://www.w3.org/2000/svg" height="15" width="18" viewBox="0 0 576 512">
              <path fill="#ffffff" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
            </svg>
          </a>
        </li>
      </ul>

        <select name="Coins">
          <option value="USD">USD</option>
          <option value="Taka">Taka</option>
          <option value="Euro">Euro</option>
          <option value="Rupee">Rupee</option>
        </select>

        <select name="Language">
          <option value="EN">English</option>
          <option value="FA">Farance</option>
          <option value="AR">Arabic</option>
          <option value="IN">Indian</option>
        </select>

      </Navbar.Collapse>
    </Container>
  </Navbar>

  <Headroom className="Headroom">
    {['lg'].map((expand) => (
        <Navbar 
          key={expand} 
          expand={expand} >

          <Container fluid className='px-5' p="true">

            <Navbar.Brand href="#"><img src={farzaa_logo} alt="Farzaa" /></Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>

                <Nav className="NavLink justify-content-center flex-grow-1 pe-3">

                  <Link to="/"> Home </Link>

                    <Link to="/shop"> Shop</Link>

                  <NavDropdown
                    title="Pages +"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/pages/Faq">FAQ</Link>
                    <Link to="/pages/Cart">Cart</Link>
                    <Link to="/pages/Account">Account</Link>
                    <Link to="/pages/Checkout">Checkout</Link>
                  </NavDropdown>

                  <Link to="/About">About Us </Link>

                  <Link to="/contact">Contact </Link>

                </Nav>

                <Form className="d-flex align-items-center">

                <Form.Control
                    type="search"
                    placeholder="Search Keyword"
                    className='me-3'
                    aria-label="Search"
                  />

                  <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                    <path fill="#000000" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                  </svg>

                  <div className='d-flex justify-content-center align-items-center gap-4'>
                    <Link to={'/Pages/Cart'}>
                    <span className='counter'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 448 512">
                        <path fill="#000000" d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                      </svg>
                    </span>
                    </Link>
                  </div>

                </Form>
              </Offcanvas.Body>

            </Navbar.Offcanvas>

          </Container>

        </Navbar>
    ))}
  </Headroom>

  </>
    }

  </>
  )
}