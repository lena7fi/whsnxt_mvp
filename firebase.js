import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  /* apiKey: 'AIzaSyD0ljSdkpJUaqCnnJQspIJWlYAS7ud1fyA',
  authDomain: 'whsnxt-4803e.firebaseapp.com',
  projectId: 'whsnxt-4803e',
  storageBucket: 'whsnxt-4803e.appspot.com',
  messagingSenderId: '985835980775',
  appId: '1:985835980775:android:90792c6367ae398e739f42', */
  //   measurementId: 'your_measurement_id' // optional
  apiKey: "AIzaSyC3HNCCh2_lX4SpqYUBgIjhAyo9BhcERSg",
  authDomain: "apichat-eb176.firebaseapp.com",
  databaseURL: "https://apichat-eb176-default-rtdb.firebaseio.com",
  projectId: "apichat-eb176",
  storageBucket: "apichat-eb176.appspot.com",
  messagingSenderId: "813378601482",
  appId: "1:813378601482:web:941c3cb2eccc5db2e995f3",
 // measurementId: "G-5KMW46LZ4C"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {
  useFetchStreams: false, 
  // experimentalForceLongPolling: true
});

export { db, auth };