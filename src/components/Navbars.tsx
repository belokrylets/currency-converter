import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container fluid="xxl">
          <Navbar.Brand>Конвертер валют</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className='nav-link' to="/">Конвертер</Link></Nav.Link>
            <Nav.Link><Link className='nav-link' to="/CurrencyRates">Курсы</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navbars;