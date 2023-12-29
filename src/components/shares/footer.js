import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = (props) => {

    return <Navbar bg="light" data-bs-theme="light" style={{ position: 'fixed', width: "100%", bottom: "0" }}>
        <Container>
            <Nav>
                <Nav.Link href="#contractus">Contract us.</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
}

export default Footer;