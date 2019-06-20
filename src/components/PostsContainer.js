import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { getPosts } from '../redux/reducers/post'

import Posts from './Posts'
import Post from './Post'
import { connect } from 'react-redux';

class PostsContainer extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return (
            <Switch>
                <Route path="/posts" component={Posts} exact/>
                <Route path="/posts/:id" component={Post} />
            </Switch>
        )
    }
}

export default connect(null, { getPosts })(PostsContainer)