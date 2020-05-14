import React from 'react';
import moment from 'moment/moment';
import CheckModel from '../../models/Check';
import PropertyModel from '../../models/Property';
import OperatorModel from '../../models/Operator';
import QuantityModel from '../../models/ProductionQuantity';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import OperatorSummary from '../operators/OperatorSummary';
import QuantityTable from '../productions/QuantityTable';

interface Props {
	check: CheckModel;
	productionQuantities: QuantityModel[];
	operator: OperatorModel;
	properties: PropertyModel[];
}

const CheckDetails = ({ check, operator, properties, productionQuantities }: Props) => {
	if (check) {
		return (
			<div className='container dashboard project-list section'>
				<div className='row'>
					<div className='col s12 m6'>
						<div className='card z-depth-1'>
							<div className='card-content'>
								<span className='card-title'>Check {check.checkNumber}</span>
								<p>Amount: ${check.amount}</p>
							</div>
							<div className='card-action grey lighten-4 grey-text'>
								<div>Date: {moment(new Date(check.checkDate)).calendar()}</div>
							</div>
						</div>
					</div>
					<div className='col s12 m5 offset-m1'>
						<h6>Operator</h6>
						<OperatorSummary operator={operator} />
					</div>
				</div>
				<QuantityTable productionQuantities={productionQuantities} />
			</div>
		);
	} else {
		return (
			<div className='container center'>
				<p>Loading check...</p>
			</div>
		);
	}
};

const mapStateToProps = (state: any, ownProps: any) => {
	const operatorID = ownProps.match.params.operatorId;
	const operators = state.firestore.data.operators;
	const operator = operators ? operators[operatorID] : null;
	return {
		operator,
		check: state.firestore.data.check || null,
		productionQuantities: state.firestore.ordered.productionQuantities,
		properties: state.firestore.ordered.properties || null,
	};
};

const firestoreCollections = (props: any) => {
	let operatorID = props.match.params.operatorId;
	let checkID = props.match.params.checkId;
	return [
		{ collection: 'operators', doc: operatorID },
		{
			collection: 'operators',
			doc: operatorID,
			subcollections: [{ collection: 'checks', doc: checkID }],
			storeAs: 'check',
		},
		{
			collection: 'operators',
			doc: operatorID,
			subcollections: [
				{ collection: 'checks', doc: checkID, subcollections: [{ collection: 'productionQuantities' }] },
			],
			storeAs: 'productionQuantities',
		},
		{
			collection: 'operators',
			doc: operatorID,
			subcollections: [{ collection: 'properties' }],
			storeAs: 'properties',
		},
	];
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props: any) => firestoreCollections(props))
)(CheckDetails);
