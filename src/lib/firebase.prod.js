import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

console.log("sdf");
const config = {
 
  apiKey: "AIzaSyAJZOheuI0hnwopIBhhNNwz1wUFpEsot1A",
    authDomain: "netflix-7a354.firebaseapp.com",
    projectId: "netflix-7a354",
    storageBucket: "netflix-7a354.appspot.com",
    messagingSenderId: "458643191350",
    appId: "1:458643191350:web:f4c50bd613271b800cca97"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };