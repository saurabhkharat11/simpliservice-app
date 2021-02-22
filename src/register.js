import React, {Component} from 'react'
import {Button, Form, InputGroup, FormControl} from 'react-bootstrap'
import firebase from './Firebase';
import './register.css';
import history from './history';

export default class RegisterComp extends Component{

    constructor(){
        super();
        this.ref = firebase.firestore().collection('registered-users');
        this.state = {
            email : null ,
            firstname : null ,
            lastname : null,
            password : null,
            cnfrm_password : null 
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.password === this.state.cnfrm_password)
        {
        const {email, firstname, lastname, password} = this.state;
        this.ref.add({email, firstname, lastname, password}).then((docRef) => {
            this.setState({
                email : null ,
                firstname : null ,
                lastname : null,
                password : null,
                cnfrm_password : null 
            });
            alert("Registration Successful!")
            history.push('/login')
        }).catch((error) => {
            console.log("Error in Registering!!!", error);
        });
    }
    else
    {
        alert("Passwords Do Not Match");
    }
    }



render(){
    const {email, firstname, lastname, password, cnfrm_password} = this.state;
    return (
        <div>
           <div id="register-container" className="container">
            <h5><strong>Sign Up</strong></h5>
            <Form name = "register" onSubmit = {this.onSubmit}>
                <InputGroup required className="mb-3">
                    <InputGroup.Prepend id="a">
                        <InputGroup.Text id="basic-addon1">✒️</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="First Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name = "firstname"
                        value = {firstname}
                        onChange = {this.onChange}
                    />
                </InputGroup>

                <InputGroup required className="mb-3">
                    <InputGroup.Prepend id="a">
                        <InputGroup.Text id="basic-addon1">✒️</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Last Name"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        name = "lastname"
                        value = {lastname}
                        onChange = {this.onChange}
                    />
                </InputGroup>



                <InputGroup required className="mb-3">
                    <InputGroup.Prepend id="a">
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

                <InputGroup required className="mb-3" type="password" >
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

                <InputGroup required className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon2">🔒</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="password"
                        placeholder="Re-enter Password"
                        aria-label="Password"
                        aria-describedby="basic-addon1"
                        name ="cnfrm_password"
                        value ={cnfrm_password}
                        onChange = {this.onChange}
                    />
                </InputGroup>


                <Button variant="primary" type="submit" id="register-button" onClick="">
                    Sign Up
                </Button>


            </Form>
            </div>
            
        </div>
    );
}
}