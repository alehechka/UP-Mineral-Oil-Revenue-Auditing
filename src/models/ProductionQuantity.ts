import PropertyModel from './Property';
import OperatorModel from './Operator';
import CheckModel from './Check';

export default interface Operator {
    id?: string;
    saleDate?: firebase.firestore.Timestamp;
    productionCode?: string;
    bblMcf?: string;
    btuGrav?: string;
    price?: number;
    grossValue?: number;
    grossTaxes?: number;
    grossDeducts?: number;
    netValue?: number;
    decimalInterest?: number;
    intType?: string;
    ownerGrossValue?: number;
    taxCode?: string;
    ownerStateTax?: number;
    deductionCode?: string;
    deductions?: number;
    ownerNetValue?: number;
    properties: PropertyModel;
    operator: OperatorModel;
    check: CheckModel; 
    uid?: string;
}