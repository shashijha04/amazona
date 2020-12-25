import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown, Nav, Form, FormControl, Button, Navbar, Container, Col, Row, Card } from 'react-bootstrap';
import NavigationBar from './components/Navbar/Navbar';
import SearchBox from './components/Searchbox/Searchbox';
import Dropdown from './components/Dropdown/Dropdown';
import data from './components/Data/Data';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './Screens/ProductScreen';
import HomeScreen from './Screens/HomeScreen';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div>
          <NavigationBar />

          <Container>
            <Row>
              <Col>
                <SearchBox />
              </Col>
              <Col>
                <Dropdown />
              </Col>
            </Row>
          </Container>

          <Container>
          <Route path="/products/:id" exact={true} component={ProductScreen}/>
          <Route path="/" exact={true} component={HomeScreen}/>
           
          </Container>


        </div>
      </BrowserRouter>

    );
  }
}

export default App;
