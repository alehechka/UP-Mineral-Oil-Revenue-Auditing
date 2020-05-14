import React from 'react';
import CheckSummary from './CheckSummary';
import { Link } from 'react-router-dom';
import CheckModel from '../../models/Check';
import AddRemoveButton from '../reusable/AddRemoveButton';
import CheckForm from './CheckForm';
import OperatorModel from '../../models/Operator';

interface Props {
	checks: CheckModel[];
	operator: OperatorModel;
	operatorUID: string;
}

const OperatorList = ({ checks, operator, operatorUID }: Props) => {
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		if (checks && checks?.length === 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [checks, setActive]);

	return (
		<div className='project-list section'>
			<AddRemoveButton title='Checks' active={active} setActive={setActive} />
			{active && <CheckForm setActive={setActive} operator={operator} operatorUID={operatorUID} />}
			{checks &&
				checks.map((check) => (
					<Link to={`/operator/${operatorUID}/check/${check.id}`} key={check.id}>
						<CheckSummary check={check} />
					</Link>
				))}
		</div>
	);
};

export default OperatorList;
