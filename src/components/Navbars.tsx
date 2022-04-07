import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars: React.FC = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>Конвертер валют</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Конвертер</Link>
            <Link className='nav-link' to="/CurrencyRates">Курсы</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;