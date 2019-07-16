import React from 'react';
import Home from "./Home";
import About from "./About";
import "./App.css"
import Post from "./components/Post"
import { BrowserRouter as  Router, Route ,NavLink } from "react-router-dom"

const App = () => {
  return (
    
      <Router>
        <div>
          
        <nav style={{ margin: 10 }}>
                    <NavLink to='/' exact activeClassName='active' >
                        Home
                    </NavLink>

                    <NavLink to='/about'  activeClassName='active' >
                        About
                    </NavLink>
                    <NavLink to='/Post' exact activeClassName='active' >
                        Post
                    </NavLink>
        </nav>
       
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/Post' component={Post} />
        </div>
      </Router>

  );
}

export default App;