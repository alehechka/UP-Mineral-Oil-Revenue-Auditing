import PropertyModel from './Property';
import CheckModel from './Check';

export default interface Operator {
    id?: string;
    name: string;
    address?: string;
    city: string;
    state: string;
    phoneNumber?: string,
    zip?: number;
    properties: PropertyModel[];
    checks: CheckModel[];
    uid?: string;
}