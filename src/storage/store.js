import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistCombineReducers, autoRehydrate } from 'redux-persist'
import storage from 'redux-persist/es/storage' 
import newsSaga from '../articles/saga';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer'

const config = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const persistedReducer = persistCombineReducers(config, rootReducer)
const enhancers = [applyMiddleware(...middleware)];

const persistConfig = { enhancers };


const store = createStore(persistedReducer, undefined, compose(...enhancers));
sagaMiddleware.run(newsSaga)

const persistor = persistStore(store, persistConfig, () => {
});

const configureStore = () => {
    return { persistor, store };
}
export default configureStore;