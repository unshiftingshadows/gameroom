import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
require('firebase/firestore')
import VueFire from 'vuefire'
import VueFirestore from 'vue-firestore'

const fbapp = firebase.initializeApp({
  apiKey: 'AIzaSyDi1M5zTW5gmBZzrlNSgEcQYqtU-9EaHjw',
  authDomain: 'game-room-92f49.firebaseapp.com',
  databaseURL: 'https://game-room-92f49.firebaseio.com',
  projectId: 'game-room-92f49',
  storageBucket: 'game-room-92f49.appspot.com',
  messagingSenderId: '988754415647'
})

const firestoreSettings = {
  timestampsInSnapshots: true
}

fbapp.firestore().settings(firestoreSettings)

function user (uid) {
  if (uid) {
    return fbapp.firestore().collection('users').doc(uid)
  } else {
    return fbapp.firestore().collection('users').doc(fbapp.auth().currentUser.uid)
  }
}

function userState (uid) {
  if (uid) {
    return fbapp.database().ref('/users/' + uid + '/state')
  } else {
    return fbapp.database().ref('/users/' + fbapp.auth().currentUser.uid + '/state')
  }
}

function userRoomState (roomid, uid) {
  if (uid) {
    return fbapp.database().ref('/rooms/' + roomid + '/users/' + uid + '/state')
  } else {
    return fbapp.database().ref('/rooms/' + roomid + '/users/' + fbapp.auth().currentUser.uid + '/state')
  }
}

function room (roomid) {
  return fbapp.firestore().collection('rooms').doc(roomid)
}

function roomState (roomid) {
  return fbapp.database().ref('/rooms/' + roomid)
}

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.use(VueFire)
  Vue.use(VueFirestore)
  Vue.prototype.$firebase = {
    emailCred: firebase.auth.EmailAuthProvider.credential,
    auth: fbapp.auth(),
    userState: userState,
    userRoomState: userRoomState,
    store: fbapp.firestore(),
    room: room,
    roomState: roomState,
    user: user
  }
}
