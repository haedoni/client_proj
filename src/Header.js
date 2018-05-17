import React, { Component } from 'react';
import logo from './logo.svg';

const MenuItem = ({active, children, to}) => (
  <Link to={to} className="menu-item">
          {children}
  </Link>
)

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
              <a class="navbar-brand" href="http://bootstrapk.com/examples/carousel/#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                <li class="active"><a href="http://bootstrapk.com/examples/carousel/#">Home</a></li>
                <li><MenuItem>Upload</MenuItem></li>
                <li><MenuItem>Contact</MenuItem></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
        
  );
};

export default Header;
