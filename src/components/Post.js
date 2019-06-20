import React from 'react'
import { connect } from 'react-redux'

function Post(props) {
    let { post } = props
    return (
        <div>
            {post && <div>
                <h1>{post.title}</h1>
                <p>{post.author}</p>
                <hr/>
                <p>{post.content}</p>
            </div>}
        </div>
    )
}

let mapStateToProps = state => {
    let { selected: post } = state.posts
    return { post }
}

export default connect(mapStateToProps)(Post)