
import { useState } from 'react';
import { Navbar, Nav, Button,Jumbotron } from 'react-bootstrap';
import { Switch, Link, Route, useHistory } from 'react-router-dom';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Data from './data';
import axios from 'axios';

import './App.css';

function App() {
  let [ product, setProduct ] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Nav.Link as={Link} to='/'>LOGO</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/detail/1">Detail</Nav.Link>
            <Nav.Link as={Link} to="/detail/2">Detail2</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <Switch>
        <Route exact path="/">
          <Jumbotron className="main-visual" fluid>
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
            <div className="container">
              <h2 className="title">PRODUCT</h2>
              <div className="row">
                {
                  product.map((product, i) => {
                    return <Card product={product} index={i} key={i} />
                  }) 
                }
              </div>
              <button type="button" className="btn btn-primary mt-5 mb-5" onClick={() => {
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((response) => {
                  setProduct([...product, ...response.data])
                })
                .catch((error) => {
                  console.log('실패');
                })
              }}>More</button>
            </div>
          </main>
        </Route>

        <Route path="/detail/:id/">
          <Detail product={ product } />
        </Route>

      </Switch>
      <Footer />

    </div>
  );
}

function Card(props) {
  
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={() => { history.push('/detail/' + props.product.id ) }}>
      <img src={'https://codingapple1.github.io/shop/shoes'+( props.index + 1) +'.jpg'} alt="신발 제품 이미지" width="100%"/>
      <h4>{props.product.title}</h4>
      <p>{props.product.content}</p>
      <p>{props.product.price}</p>
    </div>
  )
}


export default App;
