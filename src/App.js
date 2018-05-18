import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './routes/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Posts from './routes/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
      <Router>
          <div>
              <Header/>
              <div>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      {/* <Route path="/about/:username" component={About}/> */}
                      <Route path="/posts" component={Posts}/>
                      <Route path="/login" component={Login}/>
                      {/* <Route path="/login" component={Login}/>
                      <Route path="/me" component={MyPage}/>
                      <Route path="/search" component={Search}/>
                      <Route component={NoMatch}/> */}
                  </Switch>
              </div>
          </div>
      </Router>
  );
};

export default App;
// class App extends Component {
//   render() {
//     return (
  
//         <div>
//             <Header/>
//             {this.props.children}
//         </div>

//     );
//   }
// }

 