import { OperatorActionTypes, CREATE_OPERATOR, CREATE_OPERATOR_ERROR, DELETE_OPERATOR } from '../types/operatorTypes';
import OperatorModel from '../../models/Operator';

interface Functions {
    getFirestore: () => any;
    getFirebase: () => any;
}

export const createOperator = (operator: OperatorModel) => {
    return (dispatch: (action: OperatorActionTypes) => void, getState: () => any, { getFirestore }: Functions) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('operators').add({
            ...operator,
            user: {
                firstName: profile.firstName,
                lastName: profile.lastName,
                uid: userId
            },
            createdAt: new Date()
        }).then((docRef: any) => {
            dispatch({ type: CREATE_OPERATOR, operator: docRef });
        }).catch((err: Error) => {
            dispatch({ type: CREATE_OPERATOR_ERROR, err });
        })
    }
}

export const removeOperator = () => {
    return (dispatch: (action: OperatorActionTypes) => void) => {
        dispatch({type: DELETE_OPERATOR})
    }
}