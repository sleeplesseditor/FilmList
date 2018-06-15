import React, { Component } from 'react';
import '../style/App.css';
import firebase from 'firebase';

import Header from './Header';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAWdtOXxCLQn4W54on1c2OZ5pbrd1Rfpbc",
      authDomain: "filmlist-eecc7.firebaseapp.com",
      databaseURL: "https://filmlist-eecc7.firebaseio.com",
      projectId: "filmlist-eecc7",
      storageBucket: "filmlist-eecc7.appspot.com",
      messagingSenderId: "902688634012"
    };

    firebase.initializeApp(config);
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
