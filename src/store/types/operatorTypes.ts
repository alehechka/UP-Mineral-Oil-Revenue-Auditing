import OperatorModel from '../../models/Operator';

export const CREATE_OPERATOR = 'CREATE_OPERATOR';
export const CREATE_OPERATOR_ERROR = 'CREATE_OPERATOR_ERROR';

interface CreateOperatorAction {
    type: typeof CREATE_OPERATOR;
    operator: OperatorModel;
}

interface CreateOperatorActionError {
    type: typeof CREATE_OPERATOR_ERROR;
    err: Error;
}

export type OperatorActionTypes = CreateOperatorAction | CreateOperatorActionError;