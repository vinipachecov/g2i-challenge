import createSagaMiddleware from 'redux-saga';
import Sagas from '../sagas';
import reducers from './reducers'
import { createStore, applyMiddleware, compose } from "redux";

const SagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(SagaMiddleware));
const store = createStore(reducers, enhancer);

SagaMiddleware.run(Sagas);

export default store;
