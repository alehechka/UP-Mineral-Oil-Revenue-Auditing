import React from 'react';
import OperatorModel from '../../models/Operator';

interface Props {
	operator: OperatorModel;
}

const ProjectSummary = ({ operator }: Props) => {
	return (
		<div className='card z-depth-1 project-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>{operator.name}</span>
				<p>
					{operator.city}, {operator.state}
				</p>
				<p className='grey-text'>
					{operator.address}, {operator.zip}
				</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
