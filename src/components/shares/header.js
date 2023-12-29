import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    const [userName, setUserName] = useState('visitor');
    // return <header className="App-header">
    //     <Container>
    //         <Row>
    //             <Col lg={10}>
    //                 <img src={logo} className="App-logo" alt="logo" />
    //                <a
    //                     className="App-link"
    //                     href="https://reactjs.org"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Welcome to the debug tool
    //                 </a>
    //             </Col>
    //             <Col lg={2}>
    //                 <a
    //                     className="App-link"
    //                     href="https://reactjs.org"
    //                     target="_blank"
    //                     rel="noopener noreferrer"
    //                 >
    //                     Contract US
    //                 </a>
    //             </Col>
    //         </Row>
    //     </Container>
    // </header>
    return <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Nav>
                Welcome to the tool 
            </Nav>
            <Nav>
                <Nav.Link href="#contractus">Hello, {userName}</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default Header;