import React from 'react'
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap'
import firebase from './Firebase';
import './login.css';
import history from './history';
import ReactDOM from 'react-dom';
import NavbarA from './index';


export default class LoginComp extends React.Component {
    constructor(props)
    {
        super(props);
        this.ref = firebase.firestore().collection('registered-users');
        this.state = {
            email : null ,
            password : null
        };

    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onLogin = (e) => {
        e.preventDefault();
        let reg_data = undefined;
        const {email, password} = this.state;
        this.ref.where("email","==",email).where("password","==",password).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                reg_data = doc.data();
            });
                if(reg_data.email === email && reg_data.password === password)
                {
                    alert("Login Successfull");
                    sessionStorage.setItem('firstname',reg_data.firstname);
                    sessionStorage.setItem('lastname',reg_data.lastname);
                    ReactDOM.render(<NavbarA />,document.getElementById("root"));
                    history.push('/');
                }
                else
                {
                    alert("INCORRECT CREDENTIALS!!");
                }
            
        });
       
        
    }
    
render(){
    const {email, password} = this.state;
    return (
        <div>
            <div id="login-container" className="container">
            <h5><strong>Login</strong></h5>
            <Form onSubmit = {this.onLogin}>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">📧</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="E-mail"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name = "email"
                        value = {email}
                        onChange = {this.onChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3" >
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon2">🔒</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="password"
                        placeholder="Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        name = "password"
                        value = {password}
                        onChange = {this.onChange}
                    />
                </InputGroup>


                <Button variant="primary" type="submit" id="login-button" onClick="">
                    Login
                </Button>


            </Form>
            </div>
            
</div>
    );
}
}