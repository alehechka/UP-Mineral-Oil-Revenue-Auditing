import React from 'react';
import OperatorModel from '../../models/Operator';
import PropertyModel from '../../models/Property';
import CheckModel from '../../models/Check';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import PropertyList from '../properties/PropertyList';
import CheckList from '../checks/CheckList';
import OperatorCard from './OperatorCard';

interface Props {
	operator: OperatorModel;
	operatorUID: string;
	properties: PropertyModel[];
	checks: CheckModel[];
}

const OperatorDetails = ({ operator, properties, operatorUID, checks }: Props) => {
	if (operator) {
		return (
			<div>
				<OperatorCard operator={operator} />
				<div className='dashboard container'>
					<div className='row'>
						<div className='col s12 m5'>
							<PropertyList properties={properties} operator={operator} operatorUID={operatorUID} />
						</div>
						<div className='col s12 m5 offset-m1'>
							<CheckList checks={checks} operator={operator} operatorUID={operatorUID} />
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='container center'>
				<p>Loading project...</p>
			</div>
		);
	}
};

const mapStateToProps = (state: any, ownProps: any) => {
	const operatorId = ownProps.match.params.operatorId;
	const operators = state.firestore.data.operators;
	const operator = operators ? operators[operatorId] : null;
	console.log(state.firestore.ordered);
	return {
		operatorUID: operatorId,
		operator,
		checks: state.firestore.ordered.checks?.filter((check: CheckModel) => check.operatorUID === operatorId),
		properties: state.firestore.ordered.properties?.filter(
			(property: PropertyModel) => property.operatorUID === operatorId
		),
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props: any) => {
		let operatorID = props.match.params.operatorId;
		return [
			{ collection: 'operators', doc: operatorID },
			{
				collection: 'operators',
				doc: operatorID,
				subcollections: [{ collection: 'checks' }],
				orderBy: ['checkDate', 'desc'],
				storeAs: 'checks',
			},
			{
				collection: 'operators',
				doc: operatorID,
				subcollections: [{ collection: 'properties' }],
				orderBy: ['name', 'asc'],
				storeAs: 'properties',
			},
		];
	})
)(OperatorDetails);
