import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyDm8wBm8mxvNY7KYLdKBUzvvsr-BK7yiss',
  authDomain: 'kodeklubben-trondheim-julekurs.firebaseapp.com',
  projectId: 'kodeklubben-trondheim-julekurs',
  storageBucket: 'kodeklubben-trondheim-julekurs.appspot.com',
  messagingSenderId: '221700445961',
  appId: '1:221700445961:web:c11a72effbf6e05ccf65d8',
  measurementId: 'G-XCS29DZ9L9',
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp
