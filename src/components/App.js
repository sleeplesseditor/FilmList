import React, { Component } from 'react';
import '../style/App.css';
import firebase from 'firebase';
import { FirebaseConfig } from '../config/keys';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import FilmList from './FilmList';
import FilmForm from './FilmForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(FirebaseConfig);
  }

  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <Header />
              <Route exact path="/" component={FilmList} />
              <Route exact path="/form" component={FilmForm} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;
