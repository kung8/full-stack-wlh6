import axios from 'axios'

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
const GET_POSTS_PENDING = 'GET_POSTS_PENDING'

let initialState = {
    data: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_PENDING:
            return { ...state, loading: true }
        case GET_POSTS_FULFILLED:
            return { ...state, loading: false, data: action.payload.data }
        default:
            return state;
    }
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}