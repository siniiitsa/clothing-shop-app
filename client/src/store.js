import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(rootReducer, enhancer);

export default store;
