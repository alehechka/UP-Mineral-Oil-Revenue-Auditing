import { PropertyActionTypes, CREATE_PROPERTY, CREATE_PROPERTY_ERROR } from '../types/propertyTypes';
import PropertyModel from '../../models/Property';

interface Functions {
    getFirestore: () => any;
    getFirebase: () => any;
}

export const createProperty = (property: PropertyModel) => {
    return (dispatch: (action: PropertyActionTypes) => void, getState: () => any, { getFirestore }: Functions) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;
        firestore.collection('properties').add({
            ...property,
            user: {
                firstName: profile.firstName,
                lastName: profile.lastName,
                uid: userId
            },
            createdAt: new Date()
        }).then((docRef: any) => {
            dispatch({ type: CREATE_PROPERTY, property: docRef });
        }).catch((err: Error) => {
            dispatch({ type: CREATE_PROPERTY_ERROR, err });
        })
    }
}