import React, { Component } from 'react';
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
              <a class="navbar-brand" href="http://bootstrapk.com/examples/carousel/#">Project name</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                {/* <li class="active"><a href="http://bootstrapk.com/examples/carousel/#">Home</a></li> */}
                <li><NavLink exact to="/" className="item" activeClassName="active">홈</NavLink></li>
                <li><NavLink to="/about/velopert" className="item" activeClassName="active">소개</NavLink></li> 
                <li><NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink></li>
                {/* <li><NavLink to="/me" className="item" activeClassName="active">마이페이지</NavLink></li>
                <li><NavLink to="/login" className="item" activeClassName="active">로그인</NavLink></li>
                <li><NavLink to="/search" className="item" activeClassName="active">검색</NavLink></li> 
                <li><MenuItem>Upload</MenuItem></li>
                <li><MenuItem>Contact</MenuItem></li> */}
              </ul>
              <ul class="nav navbar-nav member">
                <li><NavLink exact to="/login" className="item" activeClassName="active" style={{paddingLeft: 700}}>Login</NavLink></li>
                <li><NavLink to="/join" className="item" activeClassName="active">Join</NavLink></li> 
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
        
  );
};

export default Header;
