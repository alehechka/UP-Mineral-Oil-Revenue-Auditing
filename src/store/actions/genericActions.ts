import {
	GenericActionTypes,
	CREATE_GENERIC,
	CREATE_GENERIC_ERROR,
	DELETE_GENERIC,
} from '../types/genericTypes';

interface Functions {
	getFirestore: () => any;
	getFirebase: () => any;
}

export const createGeneric = (collection: string, document: any) => {
	const keys = collection.split('/');
	const key = keys[keys.length - 1];
	return (
		dispatch: (action: GenericActionTypes) => void,
		getState: () => any,
		{ getFirestore }: Functions
	) => {
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const userId = getState().firebase.auth.uid;

		firestore
			.collection(collection)
			.add({
				...document,
				createdBy: {
					fullName: profile.firstName + ' ' + profile.lastName,
					uid: userId,
				},
				createdAt: new Date(),
			})
			.then((docRef: any) => {
				dispatch({ type: CREATE_GENERIC, object: docRef, key });
			})
			.catch((err: Error) => {
				dispatch({ type: CREATE_GENERIC_ERROR, err });
			});
	};
};

export const removeGeneric = (key: string) => {
	return (dispatch: (action: GenericActionTypes) => void) => {
		dispatch({ type: DELETE_GENERIC, key });
	};
};
