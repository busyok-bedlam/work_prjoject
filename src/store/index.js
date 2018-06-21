import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import todos from '../reducers'



export const store = createStore(
    todos,{name : "test"}, 
    composeWithDevTools(
        applyMiddleware()
    )
);
