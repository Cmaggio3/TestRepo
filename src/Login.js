import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './login.css'
import {Button, FormGroup, Input, Label, FormFeedback} from "reactstrap";
import Header from "./Header/Header";

var url = '/userlogin';
var infoObj = {};
var token = '';
var userID = '';
let isAdmin = false;

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          errors: [],
          fields: [],
          email: "",
          password: "",
          startsHidden:true,
          loginButtonPressed:false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    infoObj = {email:"", password:""};

    handleLogin(e) {
        e.preventDefault();
        this.setState({loginButtonPressed:true})
        this.infoObj.password = ReactDOM.findDOMNode(this.password).value;
        this.infoObj.email = ReactDOM.findDOMNode(this.email).value;
        this.doLogin();
    }

    handleForgotPassword(e) {
        e.preventDefault();
        this.props.history.push("/resetpassword");
    }

    handleRegister(e) {
        e.preventDefault();
        this.props.history.push("/register");
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.updateFields();
        this.setState({fields});
    }

    updateFields() {
        let fields = this.state.fields;
        let infoObj = this.infoObj;
        infoObj.email = fields["email"];
        infoObj.password = fields["password"];
    }

    doLogin = async () => {
        infoObj = JSON.stringify(this.infoObj);
        const response = await fetch("https://jacobsladderapi.herokuapp.com/userlogin",{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: infoObj
        });
        const body = await response.json();
        console.log(body);
        if (response.status !== 200) throw Error(body.message);
        if (body.Error) {
            this.errorDisplay();
        } else {
            token = body.token;
            userID = this.state.fields["email"].split("@")[0];
            if (body.isAdmin === 1) {
                this.props.history.push("/adminhome");
                isAdmin = true;
            } else {
                this.props.history.push("/parenthome");
                isAdmin = false;
            }
        }
    };

    errorDisplay() {
        // we are going to store errors for all fields
        // in a single array
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        errors["email"] = "Email or password is incorrect";
        errors["password"] = "Email or password is incorrect";



        this.setState({errors: errors})
        return formIsValid
    }

  renderForm() {
    return (
        <form className="form-style" onSubmit={this.handleLogin}>
            <Header loggedIn = {false}/>
            <div className="login-page-title">
                <h1> Existing User Login</h1>
            </div>
            <div className = "question-fields">
                <FormGroup id="email">
                    <Label className="control-label required" lg={6}>Email</Label>
                    <Input lg={12}
                        ref={email => (this.email = email)}
                        type="text"
                        value={this.state.id}
                        onChange={this.handleChange.bind(this, "email")}
                        invalid={this.state.errors["email"]}/>
                    <FormFeedback invalid = {this.state.errors["email"]}>{this.state.errors["email"]}</FormFeedback>
                </FormGroup>
                <FormGroup id="password">
                    <Label className="control-label required" sm={6}>Password</Label>
                    <Input sm={12}
                        value={this.state.id}
                        ref={password => (this.password = password)}
                        onChange={this.handleChange.bind(this, "password")}
                        type="password"
                        invalid={this.state.errors["password"]}/>
                    <FormFeedback invalid = {this.state.errors["password"]}>{this.state.errors["password"]}</FormFeedback>
                </FormGroup>
                <div className="button-div">
                    <Button onClick={this.validForm}
                            color="success"
                            type="submit"> Login </Button>
                </div>
                <br/>
                <div className={"p-2 justify-content-center"} onClick = {this.handleForgotPassword} style = {{color: 'blue', textDecoration: 'underline'}}>
                    Forgot password? Click here to reset.
                    </div>
                <div className={"p-2 justify-content-center"} onClick = {this.handleRegister} style = {{color: 'blue', textDecoration: 'underline'}}>
                    Not registered? Click here to create an account.
                </div>
            </div>
        </form>
    );
  }

  render() {
    return (
      <div className="Login">
          {this.renderForm()}
      </div>
    );
  }

}
export default Login;
export {token, userID, isAdmin};
