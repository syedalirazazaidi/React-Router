import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"
 const Child = ({match}) => {
    return (
        <div>
            ID:{match.params.id}
        </div>
    );
}
 

 
 class Post  extends Component {
    state = {
        posts: [
            { id: 1, title: "Hello Blog World!" },
            { id: 2, title: "My second post" },
            { id: 3, title: "What is React Router?" }
        ]
    }

    render() { 
        const posts=this.state.posts
        return (
            <div className='posts'>
                <h1>Post List</h1>
                <ul>
                {
                    posts.map(post=>(
                        <li key={post.id}>
                        <Link to={`/posts/${post.id}`}>{posts.title}</Link>
                        </li>
                    ))
                }
                </ul>
                <Route path='/posts/:id' component={Child} />
            </div>
        );
    }
}
export default Post
 
