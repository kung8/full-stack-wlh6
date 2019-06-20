import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPost } from '../redux/reducers/post'

function Posts(props) {
    return (
        <div>
            {props.posts.map(post => {
                return (
                    <Link 
                        to={`/posts/${post.id}`} 
                        key={post.id}
                        onClick={() => props.getPost(post.id)}>
                        <h1>{post.title}</h1>
                        {props.user && props.user.id === post.user_id && <button>edit</button>}
                        <p>{post.author}</p>
                    </Link>
                )
            })}
        </div>
    )
}

let mapStateToProps = state => {
    let { data: posts } = state.posts
    let { data: user } = state.user
    return { posts, user }
}

export default connect(mapStateToProps, { getPost })(Posts)