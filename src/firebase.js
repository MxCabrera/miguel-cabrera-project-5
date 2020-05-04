import firebase from 'firebase';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyAS4gu_gDipE3dr97wJmNtEmOWsYFpopCE",
   authDomain: "react-project-five.firebaseapp.com",
   databaseURL: "https://react-project-five.firebaseio.com",
   projectId: "react-project-five",
   storageBucket: "react-project-five.appspot.com",
   messagingSenderId: "1012521617440",
   appId: "1:1012521617440:web:75da532c6c40340df45445"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;