import PropertyModel from '../../models/Property';

export const CREATE_PROPERTY = 'CREATE_PROPERTY';
export const CREATE_PROPERTY_ERROR = 'CREATE_PROPERTY_ERROR';

interface CreatePropertyAction {
    type: typeof CREATE_PROPERTY;
    property: PropertyModel;
}

interface CreatePropertyActionError {
    type: typeof CREATE_PROPERTY_ERROR;
    err: Error;
}


export type PropertyActionTypes = CreatePropertyAction | CreatePropertyActionError;