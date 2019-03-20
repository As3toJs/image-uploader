import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBjwTPOktMazkfguLw5C-5RLceHYpY1W20",
    authDomain: "image-uploader-5217f.firebaseapp.com",
    databaseURL: "https://image-uploader-5217f.firebaseio.com",
    projectId: "image-uploader-5217f",
    storageBucket: "image-uploader-5217f.appspot.com",
    messagingSenderId: "834853163965"
};
firebase.initializeApp(config);

const storage = firebase.storage();
export {
    storage, firebase as default
}
