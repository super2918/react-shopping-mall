
import { useState } from 'react';
import { Form, Navbar, Nav, Button, FormControl, Jumbotron } from 'react-bootstrap';
import Footer from './components/Footer';
import Data from './data';
import './App.css';


function App() {
  let [ shoes, setShoes ] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link1">Men</Nav.Link>
            <Nav.Link href="#link2">Women</Nav.Link>
            <Nav.Link href="#link3">Kids</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">검색</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="bg-main" fluid>
        <h1>20% Season OFF</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
        <div>
          <Button variant="primary">Learn more</Button>
        </div>
      </Jumbotron>

      <main>
        <div className="row">
          <Card />
        </div>
      </main>

      <Footer />

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes1.jpg'} alt="" width="100%"/>
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[1].content}</p>
      <p>{props.shoes[2].price}</p>
    </div>
  )
}


export default App;
