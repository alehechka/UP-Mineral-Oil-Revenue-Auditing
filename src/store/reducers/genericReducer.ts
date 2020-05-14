import {
	GenericActionTypes,
	CREATE_GENERIC,
	CREATE_GENERIC_ERROR,
	DELETE_GENERIC,
} from '../types/genericTypes';

interface State {
	[key: string]: any;
}

const initState: State = {};

const genericReducer = (state: State = initState, action: GenericActionTypes) => {
	switch (action.type) {
		case CREATE_GENERIC:
			console.log('CREATE_GENERIC', action);
			return {
				...state,
				[action.key]: action.object,
			};
		case CREATE_GENERIC_ERROR:
			console.log('CREATE_GENERIC_ERROR', action);
			return {
				...state,
				err: action.err,
			};
		case DELETE_GENERIC:
			console.log('DELETE_GENERIC', action);
			return {
				...state,
				[action.key]: null,
			};
		default:
			return state;
	}
};

export default genericReducer;
