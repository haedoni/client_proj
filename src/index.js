import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home}/>
                        <Route path="about" component={About}/>
                        <Route path="post" component={Posts}/>
                    </Route>
                 </Router>, document.getElementById('naav'));
registerServiceWorker();
