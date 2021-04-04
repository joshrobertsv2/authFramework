import * as firebase from 'firebase';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC6dbG7lImoWY-gXk4W-Wc0Vcz6-Q2CF50",
  authDomain: "home-dish.firebaseapp.com",
  projectId: "home-dish",
  storageBucket: "home-dish.appspot.com",
  messagingSenderId: "300850748793",
  appId: "1:300850748793:web:ea66e13d910883e71a63a8"
};

firebase.initializeApp(firebaseConfig);


const auth = firebase.auth;

export default auth;

