import React from 'react';
import OperatorModel from '../../models/Operator';

interface Props {
	operator: OperatorModel;
}

const OperatorCard = ({ operator }: Props) => {
	if (operator) {
		return (
			<div className='container section project-details'>
				<div className='card z-depth-1'>
					<div className='card-content'>
						<span className='card-title'>{operator.name}</span>
						<p>
							{operator.city}, {operator.state}
						</p>
					</div>
					<div className='card-action grey lighten-4 grey-text'>
						<div>
							{operator.address}, {operator.zip}
						</div>
						<div>Phone: {operator.phoneNumber}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>Loading operator...</div>;
	}
};

export default OperatorCard;
