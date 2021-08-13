import Rebase from 're-base';
import firebase from 'firebase/app';
require('firebase/database');
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBdY7370EhqVAolA2SoqDF24kaaUwqG9pw',

  authDomain: 'burger-shop-react-6f88f.firebaseapp.com',

  databaseURL: 'https://burger-shop-react-6f88f-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
