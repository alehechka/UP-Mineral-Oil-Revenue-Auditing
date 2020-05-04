import OperatorModel from './Operator';

export default interface Operator {
    id?: string;
    name: string;
    county: string;
    state: string;
    operator?: OperatorModel;
    uid: string;
}