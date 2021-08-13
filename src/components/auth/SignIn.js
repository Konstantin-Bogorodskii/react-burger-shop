import React, { Component } from 'react';
import { firebaseApp } from '../../base';
import Login from './Login';
import firebase from 'firebase/app';

class SignIn extends Component {
  state = {
    user: '',
  };

  render() {
    return this.props.children;
  }
}
export default SignIn;
