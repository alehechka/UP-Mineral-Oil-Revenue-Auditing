import ProductionQuantityModel from './ProductionQuantity';
import OperatorModel from './Operator';

export default interface Operator {
    id?: string;
    amount: number;
    checkDate: firebase.firestore.Timestamp;
    checkNumber: number;
    operator: OperatorModel;
    productionQuantities: ProductionQuantityModel[];
    uid: string;
}