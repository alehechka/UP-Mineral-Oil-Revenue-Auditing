import authReducer from './authReducer';
import operatorReducer from './operatorReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    operator: operatorReducer,
    auth: authReducer,
    firestore: firestoreReducer,   
    firebase: firebaseReducer
});

export default rootReducer;