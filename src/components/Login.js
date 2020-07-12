import React, {Component} from 'react';
import {
    TextField,
    Button,
    Container
  } from '@material-ui/core'


class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            msgText: ''
        }
    }

    handleTextChange = (e) => {
        const state = { ...this.state }
        state[e.target.name] = e.target.value
        this.setState(state)
      }

     login= (e) => {
        e.preventDefault()
        const newUser = {username: this.state.username, password: this.state.password };
        this.props.addUser(newUser);
        document.cookie = "loggedIn=true;max-age=60*1000";
        this.setState({
            msgText: "You're now logged in!"
        })
      }

      

    render(){
        return(

            <div>
                <Container maxWidth="sm">
              <form className="login-form" onSubmit={this.login}>
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.username}
                  name="username"
                  label="username"
                  type="text" />
                <TextField
                  required
                  onChange={this.handleTextChange}
                  value={this.state.password}
                  name="password"
                  label="Password"
                  type="password" />
                            
                <Button
                  type="submit"
                  className="login-button"
                  variant="contained"
                  color="primary">SignIn!</Button>
              </form>
            </Container>
            <div>
                {this.state.msgText}
            </div>
            <div>{this.props.user && this.props.user.username}</div>
            </div>
        )
    }
}

export default Login