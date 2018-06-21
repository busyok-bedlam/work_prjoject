import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom'
import { store } from './store'
import App from './shared/app';
import './styles/style.css';

// const Test = () => (
//     <div>Test</div>
// )
//

const Root = (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
            </div>
        </Router>
    </Provider>
)

const root = document.getElementById('root');
ReactDOM.render(
    Root,
    root
)
