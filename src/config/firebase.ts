import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
const firebaseConfig = {
	apiKey: 'AIzaSyB89LULPztXZnXle6Wr4l_rvN0QEX8Fk_8',
	authDomain: 'up-mora.firebaseapp.com',
	databaseURL: 'https://up-mora.firebaseio.com',
	projectId: 'up-mora',
	storageBucket: 'up-mora.appspot.com',
	messagingSenderId: '1008152896859',
	appId: '1:1008152896859:web:bad8d2c69243212208667e',
	measurementId: 'G-Z4V5G88HD6',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

firebase
	.firestore()
	.enablePersistence()
	.catch(function (err: any) {
		if (err.code === 'failed-precondition') {
			// Multiple tabs open, persistence can only be enabled
			// in one tab at a a time.
			// ...
		} else if (err.code === 'unimplemented') {
			// The current browser does not support all of the
			// features required to enable persistence
			// ...
		}
	});
// Subsequent queries will use persistence, if it was enabled successfully

export default firebase;
