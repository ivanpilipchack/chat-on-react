import React from "react";
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import Register from './Register';




class Login extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            password,
            passwordConfirmation
        } = this.state;

        return ( <
            Grid textAlign = "center"
            verticalAlign = "middle"
            className = "app" >
            <
            Grid.Column style = {
                { maxWidth: 450 } } >
            <
            Header as = "h1"
            icon color = "violet"
            textAlign = "center" >
            <
            Icon name = "users"
            color = "violet" / >
            Login to Pllug Chat <
            /Header> <
            Form size = "large" >
            <
            Segment stacked >
            <
            Form.Input fluid name = "email"
            icon = "mail"
            iconPosition = "left"
            placecholder = "Email Address"
            type = "email" /
            >
            <
            Form.Input fluid name = "password"
            type = "password"
            icon = "lock"
            placecholder = "Password"
            iconPosition = "left" /
            >
            <
            Button fluid color = "violet"
            size = "large" >
            Login <
            /Button> <
            Message >
            Don 't have an account <Link to="/Register">Register</Link> <
            /Message> <
            /Segment> <
            /Form>

            <
            /Grid.Column> <
            /Grid>
        );
    }
}

export default Login;