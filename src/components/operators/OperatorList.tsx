import React from 'react';
import OperatorSummary from './OperatorSummary';
import { Link } from 'react-router-dom';
import OperatorModel from '../../models/Operator';

interface Props {
	operators: [OperatorModel];
}

const OperatorList = ({ operators }: Props) => {
	return (
		<div className='project-list section'>
			{operators &&
				operators.map((operator) => (
					<Link to={`/operator/${operator.id}`} key={operator.id}>
						<OperatorSummary operator={operator} />
					</Link>
				))}
		</div>
	);
};

export default OperatorList;
