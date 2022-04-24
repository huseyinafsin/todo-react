import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCB6HOVnQzTkaL339O-WshUcyY_09GMxp0",
    authDomain: "todo-react-da534.firebaseapp.com",
    projectId: "todo-react-da534",
    storageBucket: "todo-react-da534.appspot.com",
    messagingSenderId: "365941208114",
    appId: "1:365941208114:web:022d9f58fe1d34f523f82b",
    measurementId: "G-4VBP3EDTEJ"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{db};