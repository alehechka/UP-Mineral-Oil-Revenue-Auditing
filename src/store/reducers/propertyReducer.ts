import { PropertyActionTypes, CREATE_PROPERTY, CREATE_PROPERTY_ERROR } from '../types/propertyTypes';
import PropertyModel from '../../models/Property';

interface State {
    properties: PropertyModel[];
}

const initState: State = {
    properties: []
}

const propertyReducer = (state: State = initState, actions: PropertyActionTypes) => {
    switch (actions.type) {
        case CREATE_PROPERTY:
            return {
                ...state,
                property: actions.property
            }
        case CREATE_PROPERTY_ERROR:
            return {
                ...state,
                err: actions.err
            }
        default: 
            return state;
    }
}

export default propertyReducer;