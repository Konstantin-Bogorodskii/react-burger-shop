import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBpmEVPcQBE_cvNwO_tSzu1bExGXrXk3iI',
  authDomain: 'burger-shop-8bfe7.firebaseapp.com',
  databaseURL: 'https://burger-shop-8bfe7-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
