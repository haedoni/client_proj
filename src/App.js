import React from 'react';
import Header from './routes/Header';
import Home from './routes/Home';
import LoginGoogle from './routes/LoginGoogle';
import Posts from './routes/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyPage from './routes/MyPage';

const App = () => {
  return (
      <Router>
          <div>
              <Header/>
              <div>
                  <Switch>
                      <Route exact path="/home" component={Home}/>
                      {/* <Route path="/about/:username" component={About}/> */}
                      <Route path="/mypage" component={MyPage}/>
                      <Route path="/posts" component={Posts}/>
                      <Route exact path="/" component={LoginGoogle}/>
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

 