// configurações do firebase. Obtidas na aba das configurações do aplicativo no firebase
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCq5NYMmJ0xyKJRBEbEUthbMgotzumHJaM',
  authDomain: 'miniblog-260f5.firebaseapp.com',
  projectId: 'miniblog-260f5',
  storageBucket: 'miniblog-260f5.appspot.com',
  messagingSenderId: '175842618079',
  appId: '1:175842618079:web:d544d27c9310ad157d176a',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
