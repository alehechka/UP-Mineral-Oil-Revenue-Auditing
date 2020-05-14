import React from 'react';
import CheckModel from '../../models/Check';
import moment from 'moment/moment';

interface Props {
	check: CheckModel;
}

const ProjectSummary = ({ check }: Props) => {
	return (
		<div className='card z-depth-1 project-summary'>
			<div className='card-content grey-text text-darken-3'>
				<span className='card-title'>Check {check.checkNumber}</span>
				<p>${check.amount}</p>
				<p className='grey-text'>Date: {moment(new Date(check.checkDate)).calendar()}</p>
			</div>
		</div>
	);
};

export default ProjectSummary;
