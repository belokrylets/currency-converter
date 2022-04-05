import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navbars: React.FC = () => {
    return (
        <div>
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>Конвертер валют</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Конвертер</Nav.Link>
                <Nav.Link href="/CurrencyRates">Курсы</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
    );
}

export default Navbars;