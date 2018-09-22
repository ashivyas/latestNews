/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/storage/Store'
import News from './src/articles/index.js'
import AppIntroSlider from 'react-native-app-intro-slider';

const { persistor, store } = configureStore();

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
  textStyle: {
    fontFamily: 'gsr',
    
  }
});


const slides = [
  {
    key: 'somethun',
    title: 'World News',
    titleStyle: styles.textStyle,
    text: 'Latest News\nAround The World',
    textStyle: styles.textStyle,
    image: require('./assets/1.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Mobile & Desktop',
    titleStyle: styles.textStyle,
    text: 'It can be viewed on mobile\n as well as on desktop',
    textStyle: styles.textStyle,
    image: require('./assets/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Latest Interviews',
    titleStyle: styles.textStyle,
    text: 'Interviews will be loaded \nautomatically',
    textStyle: styles.textStyle,
    image: require('./assets/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#AAAAAA',
  }
];


export default class App extends React.Component {

  state = {
    showRealApp: false
  }
  _onDone = () => {
    this.setState({ showRealApp: true });
  }
  render() {
    console.disableYellowBox = true;
    if (this.state.showRealApp) {
      return (
        <Provider store={store} >
          <PersistGate loading={null} persistor={persistor}>
            <News />
          </PersistGate>
        </Provider>
      );
    } else {
      return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
    }
  }
}
