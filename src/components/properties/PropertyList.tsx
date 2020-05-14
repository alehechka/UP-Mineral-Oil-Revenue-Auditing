import React from 'react';
import PropertySummary from './PropertySummary';
// import { Link } from "react-router-dom";
import PropertyModel from '../../models/Property';
import OperatorModel from '../../models/Operator';
import PropertyForm from './PropertyForm';
import AddRemoveButton from '../reusable/AddRemoveButton';

interface Props {
	properties: PropertyModel[];
	operator: OperatorModel;
	operatorUID: string;
}

const OperatorList = ({ properties, operator, operatorUID }: Props) => {
	const [active, setActive] = React.useState(false);

	React.useEffect(() => {
		if (properties && properties?.length === 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [properties, setActive]);

	return (
		<div className='project-list section'>
			<AddRemoveButton title='Properties' active={active} setActive={setActive} />
			{active && <PropertyForm setActive={setActive} operator={operator} operatorUID={operatorUID} />}
			{properties &&
				properties.map((property) => (
					// <Link to={`/editProperty/${property.id}`} key={property.id}>
					<PropertySummary property={property} key={property.id} />
					// </Link>
				))}
		</div>
	);
};

export default OperatorList;
