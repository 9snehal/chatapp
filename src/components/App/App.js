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
      console.log(user);
    });
  }
  handleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    console.log("signin");

  }
  handleLogOut() {
    firebase.auth().signOut();
    console.log("logout");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2> My ChatApp</h2>
          { !this.state.user ? (
                     <button type="button" className="btn btn-danger btn-social  btn-google"
                       onClick={this.handleSignIn.bind(this)}
                     >
                        <i className="fa fa-google"></i> Sign in with google
                        </button>
                   ) : (
                     <button type="button" className="btn btn-danger btn-social btn-google"
                       onClick={this.handleLogOut.bind(this)}
                     >
                         <i className="fa fa-google"></i>Logout
                     </button>
                   )}
                 </div>
                 <div className="app__list">
                   <Form user={this.state.user} />
                  </div>
                   <footer id="footer">
                      <p>@Snehal Narkar</p>
                   </footer>
         </div>

    );
  }
}

export default App;
