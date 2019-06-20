import React from 'react'
import { connect } from 'react-redux'

import LoginForm from './LoginForm'

function Landing(props) {
    let { user } = props
    return (
        <div>
            { user ? <h1>Welcome, {user.name} </h1> : <LoginForm></LoginForm>}
        </div>
    )
}

let mapStateToProps = state => {
    let { data: user } = state.user 
    return { user }
}

export default connect(mapStateToProps)(Landing)