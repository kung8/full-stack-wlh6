import React, { Component } from 'react'
import { connect } from 'react-redux'

import { login } from '../redux/reducers/user'

class LoginForm extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        let { email, password } = this.state
        this.props.login({ email, password })
    }

    render() {
        return (
            <div>
                <input 
                    name="email" 
                    type="text" 
                    placeholder="email" 
                    onChange={this.handleChange}/>
                <input 
                    name="password" 
                    type="password" 
                    placeholder="password" 
                    onChange={this.handleChange}/>
                <button onClick={this.handleSubmit}>login</button>
            </div>
        )
    }
}

export default connect(null, { login })(LoginForm)