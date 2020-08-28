import firebase from 'firebase';
import Config from './config';

firebase.initializeApp(Config);

export const db = firebase.firestore();
//export const database = firebase.database();
//export const storage = firebase.storage();
export const auth = firebase.auth;