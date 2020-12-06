import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD9w1uYk-Lav1CWM_XwCsXrgRVrj1-pDIE",
    authDomain: "myfirstproject-eaa80.firebaseapp.com",
    projectId: "myfirstproject-eaa80",
    storageBucket: "myfirstproject-eaa80.appspot.com",
    messagingSenderId: "237943752301",
    appId: "1:237943752301:web:2602e5ced92f0fe2eda164",
    measurementId: "G-TCVHET4Q0R"
  };

  const fire = firebase.initializeApp(config);
  export default fire;