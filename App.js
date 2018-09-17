/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/reducer/store'
import News from './src/screens/news/index.js'

const { persistor, store } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <News/>
        </PersistGate>
      </Provider>
    );
  }
}
