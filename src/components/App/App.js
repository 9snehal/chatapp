import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './App.css';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import firebaseConfig from '../../config';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }
  handleLogOut() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ChatApp</h2>
          { !this.state.user ? (
                     <button
                       className="app__button"
                       onClick={this.handleSignIn.bind(this)}
                     >
                       Sign in
                     </button>
                   ) : (
                     <button
                       className="app__button"
                       onClick={this.handleLogOut.bind(this)}
                     >
                       Logout
                     </button>
                   )}
                 </div>
                 <div className="app__list">
                   <Form user={this.state.user} />
        </div>
      </div>
    );
  }
}

export default App;
