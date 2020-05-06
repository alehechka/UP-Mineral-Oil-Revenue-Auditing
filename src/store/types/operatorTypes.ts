import OperatorModel from '../../models/Operator';

export const CREATE_OPERATOR = 'CREATE_OPERATOR';
export const CREATE_OPERATOR_ERROR = 'CREATE_OPERATOR_ERROR';
export const DELETE_OPERATOR = 'DELETE_OPERATOR';

interface CreateOperatorAction {
    type: typeof CREATE_OPERATOR;
    operator: OperatorModel;
}

interface CreateOperatorActionError {
    type: typeof CREATE_OPERATOR_ERROR;
    err: Error;
}

interface DeleteOperatorAction {
    type: typeof DELETE_OPERATOR;
}

export type OperatorActionTypes = CreateOperatorAction | CreateOperatorActionError | DeleteOperatorAction;