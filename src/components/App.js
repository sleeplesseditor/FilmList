import React, { Component } from 'react';
import '../style/App.css';
import firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';

import Header from './Header';
import FilmList from './FilmList';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FirebaseConfig);
  }

  render() {
    return (
        <div>
          <Header />
          <FilmList />
        </div>
    );
  }
}

export default App;
