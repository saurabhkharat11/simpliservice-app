import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Navbar, Nav } from 'react-bootstrap';
import {Router, Route, Switch}  from 'react-router-dom';
import LoginComp from './login';
import RegisterComp from './register';
import HomeScreen from './home';
import ServiceComp from './services';
import history from './history';


export default class NavbarA extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
     firstname : undefined,
     lastname : undefined,
     isLoggedIn : false
    }
  }

  componentDidMount(){
      const f_name = sessionStorage.getItem("firstname");
      const l_name = sessionStorage.getItem("lastname");
      if(f_name !== null && l_name !== null)
      {
        this.setState({
        firstname: f_name,
        lastname : l_name,
        isLoggedIn : true
      });
    }
  }

  userLogout = (e) => {
    sessionStorage.clear();
    Location.reload();
  }
   

  render() {
    return (<div>
            <Router history={history}>
          <Navbar variant="dark" expand="lg" className = "fixed-top" style={{backgroundColor:"black"}}>
              <Navbar.Brand href="/" style={{color:'white',fontWeight:'bold',marginRight:'40px',paddingBottom:'9px'}}>SimpliService</Navbar.Brand>
                  <Nav className="mr-auto">
                      <Nav.Link href="/" className = "nav-element">Home</Nav.Link>
                      <Nav.Link href="#a" className = "nav-element" >About</Nav.Link>
                      <Nav.Link href="#b" className = "nav-element" >Contact</Nav.Link>
                      <Nav.Link href="#d" className = "nav-element" >Gallery</Nav.Link>
                      <Nav.Link href="/services" className = "nav-element" >Get A Service</Nav.Link>
                      {this.state.isLoggedIn && <Nav.Link href="/services" className = "nav-element" >My Services</Nav.Link>}
                  </Nav>
                  <Nav className="justify-content-end">
                      <Nav.Item>
                        {!this.state.isLoggedIn && <Nav.Link href="/login" className = "nav-element" style={{color:'white',fontWeight:'550'}}>Login</Nav.Link>}
                      </Nav.Item>
                      <Nav.Item>
                        {!this.state.isLoggedIn && <Nav.Link href="/register" className = "nav-element" style={{color:'white',fontWeight:'550'}}>Sign Up</Nav.Link>}
                      </Nav.Item>
                      {this.state.isLoggedIn && <Navbar.Text className = "nav-element">
                        Signed in as: <a href="#login">{`${this.state.firstname} ${this.state.lastname}`}</a>
                      </Navbar.Text>}
                      <Nav.Item>
                        {this.state.isLoggedIn && <Nav.Link href="/" className = "nav-element" style={{color:'white',fontWeight:'550'}} onClick = {this.userLogout}>Logout</Nav.Link>}
                      </Nav.Item>
                  </Nav>
          </Navbar>
          
          <div>
            <Switch>
              <Route exact path ='/' component ={HomeScreen}/>
              <Route path ='/login' component = {LoginComp}/>
              <Route path ='/register' component = {RegisterComp}/>
              <Route path ='/services' component = {ServiceComp}/>
            </Switch>
          </div>
          </Router>
      </div>
      );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <NavbarA />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
