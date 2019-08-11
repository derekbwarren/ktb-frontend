import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import 'firebase/auth';

import firebase from '../../firebase'


class Login extends Component {
  

  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    
    return (
      <div>
        {
          user ? <p> Hello, {user.displayName}</p> : <p>please sign in</p>
        }
        {
          user ? <button onClick={signOut}> Sign Out </button>
          : <button onClick={signInWithGoogle}> Sign In With Google</button>
        }
      </div>
    );
  }
}

const firebaseAppAuth = firebase.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),

};

export default withFirebaseAuth({
  providers, 
  firebaseAppAuth,
})(Login);

