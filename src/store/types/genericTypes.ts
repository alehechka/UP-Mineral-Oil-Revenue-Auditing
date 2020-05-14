export const CREATE_GENERIC = 'CREATE_GENERIC';
export const CREATE_GENERIC_ERROR = 'CREATE_GENERIC_ERROR';
export const DELETE_GENERIC = 'DELETE_GENERIC';

interface CreateAction {
	type: typeof CREATE_GENERIC;
	key: string;
	object: any;
}

interface CreateActionError {
	type: typeof CREATE_GENERIC_ERROR;
	err: Error;
}

interface DeleteAction {
	type: typeof DELETE_GENERIC;
	key: string;
}

export type GenericActionTypes = CreateAction | CreateActionError | DeleteAction;
