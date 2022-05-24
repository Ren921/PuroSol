import firebase from 'firebase/compat/app'
import { initializeApp } from "firebase/app";
import { 
  getFirestore, collection
} from "@firebase/firestore";
import 'firebase/compat/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//.........................COMENTADO...............................
// Esto se modifica si usan su firebase copian y pegan su propio proyecto de firebase
const firebaseConfig = {
  apiKey: "AIzaSyAPVeiXWhFucom-Baw7SBwOCX4xyNhuZ9s",
  authDomain: "joyeriapurosol.firebaseapp.com",
  projectId: "joyeriapurosol",
  storageBucket: "joyeriapurosol.appspot.com",
  messagingSenderId: "767286222344",
  appId: "1:767286222344:web:8ca00abe0522f70f513bbd"
};
// ............................COMENTADO...................
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);



  export {auth}