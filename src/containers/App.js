import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import 'react-dates/initialize';
import RouteContainer from './RouteContainer';
import '../styles/App.css';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <RouteContainer />
        </div>
      </Provider>
    );
  }
}