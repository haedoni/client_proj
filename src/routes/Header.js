import React from 'react';
import { NavLink } from 'react-router-dom';

const Header  = () => {
  return (
    <div class="navbar-wrapper">
      <div class="container">
        <nav class="navbar navbar-inverse navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              {/* <a class="navbar-brand" href="http://bootstrapk.com/examples/carousel/#">Project name</a> */}
              <a class="navbar-brand"><NavLink exact to="/home" activeClassName="active">Amazon Pick</NavLink></a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                {/* <li class="active"><a href="http://bootstrapk.com/examples/carousel/#">Home</a></li> */}
                <li><NavLink exact to="/home" className="item" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/about/velopert" className="item" activeClassName="active">소개</NavLink></li> 
                <li><NavLink to="/posts" className="item" activeClassName="active">Upload</NavLink></li>
                <li><NavLink exact to="/" className="item" activeClassName="active">Login</NavLink></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
        
  );
};

export default Header;
