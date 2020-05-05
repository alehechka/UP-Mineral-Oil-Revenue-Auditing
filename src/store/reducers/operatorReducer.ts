import { OperatorActionTypes, CREATE_OPERATOR, CREATE_OPERATOR_ERROR } from '../types/operatorTypes';
import OperatorModel from '../../models/Operator';

interface State {
    operators: OperatorModel[];
    operator?: OperatorModel;
}

const initState: State = {
    operators: []
}

const operatorReducer = (state: State = initState, action: OperatorActionTypes) => {
    switch (action.type) {
        case CREATE_OPERATOR:
            return {
                ...state,
                operator: action.operator
            };
        case CREATE_OPERATOR_ERROR:
            return {
                ...state,
                err: action.err
            };
        default:
            return state;
    }
}

export default operatorReducer;