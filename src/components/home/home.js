import React from 'react'
import { Link, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
const Home = (props) => {
  // // ◆1.退出登录
  // const logOutHandler = () => {
  //     props.history.push('/login');

  // }
  return <Container style={{ padding: '20px', height: "100vh-50px" }}>
    <h5>
      Finance
    </h5>
    <ul>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Doc take down </Nav.Link>
            {/* <a>(Take down articles)</a> */}
            {/* <Nav.Link disabled >(Take down articles)</Nav.Link> */}
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Feeds Debug Tool</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Finance User Interest</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Prong 1 Api Debug Tool</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Prong 2 Api Debug Tool</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Form.Label htmlFor="exampleColorInput">Event Brief</Form.Label>
        <ul>
          <li>
            <Nav
              activeKey="/eventbrief"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>

              <Nav.Item>
                <Nav.Link href="/eventbrief" >Remove Event</Nav.Link>
              </Nav.Item>
            </Nav>
          </li>
          <li>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Preview Event Articles</Nav.Link>
              </Nav.Item>
            </Nav>
          </li>
          <li>
            <Nav>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Custom Event</Nav.Link>
              </Nav.Item>
            </Nav>
          </li>
        </ul>
      </li>

    </ul>
    <h5>
      Sports
    </h5>
    <ul>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Sports User Interest</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Prong 1 Api Debug Tool</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Sports Headline</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
      <li>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" >Sports Ranker Tool</Nav.Link>
          </Nav.Item>
        </Nav>
      </li>
    </ul>

  </Container>

};
export default Home;

