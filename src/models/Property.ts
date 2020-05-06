import OperatorModel from './Operator';

export default interface Operator {
    id?: string;
    name: string;
    propertyNumber: number;
    county: string;
    state: string;
    operator?: OperatorModel;
    uid: string;
}