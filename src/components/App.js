import React, { Component } from 'react';
import '../style/App.css';
import firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';

import Header from './Header';
import FilmForm from './FilmForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FirebaseConfig);
  }

  render() {
    return (
        <div>
          <Header />
          <FilmForm />
        </div>
    );
  }
}

export default App;
