import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABvoaHy0vSc2bNqE0VNO5YtEDQt-4EziU",
    authDomain: "mumbai-runners-fcd30.firebaseapp.com",
    databaseURL: "https://mumbai-runners-fcd30.firebaseio.com",
    projectId: "mumbai-runners-fcd30",
    storageBucket: "",
    messagingSenderId: "974218553626"
  };
  
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;