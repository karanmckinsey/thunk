import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { counterReducer } from './reducers/counter';

const reducer = combineReducers({
    counter: counterReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
