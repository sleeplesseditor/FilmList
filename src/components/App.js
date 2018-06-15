import React, { Component } from 'react';
import '../style/App.css';
import firebase from 'firebase';

import Header from './Header';
import { FirebaseConfig } from '../config/keys';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FirebaseConfig);
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
