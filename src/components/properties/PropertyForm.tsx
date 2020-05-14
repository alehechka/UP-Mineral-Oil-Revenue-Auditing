import React from 'react';
import PropertyModel from '../../models/Property';
import OperatorModel from '../../models/Operator';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createGeneric } from '../../store/actions/genericActions';

interface Props {
	setActive: (active: boolean) => void;
	createGeneric: (collection: string, property: PropertyModel) => any;
	operator: OperatorModel;
	operatorUID: string;
}

const PropertyForm = ({ setActive, createGeneric, operatorUID }: Props) => {
	const { handleSubmit, register, formState, reset } = useForm<PropertyModel>({ mode: 'onChange' });
	const [submit, setSubmit] = React.useState(false);
	const onSubmit = (values: PropertyModel) => {
		setSubmit(true);
		createGeneric(`operators/${operatorUID}/properties`, {
			...values,
			operatorUID,
		});
		reset({});
		setActive(false);
		setSubmit(false);
	};

	return (
		<div className='card z-depth-1 project-summary'>
			<form className='white' onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '0px' }}>
				<h5 className='grey-text text-darken-3'>Create Property</h5>
				<div className='input-field'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' name='name' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='propertyNumber'>Property Number</label>
					<input type='number' id='propertyNumber' name='propertyNumber' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='county'>County</label>
					<input type='text' id='county' name='county' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='state'>State</label>
					<input type='text' id='state' name='state' maxLength={2} ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<button
						type='submit'
						disabled={!formState.isValid || submit}
						className='btn pink lighten-1 z-depth-0'
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch: (action: any) => any) => {
	return {
		createGeneric: (collection: string, property: PropertyModel) =>
			dispatch(createGeneric(collection, property)),
	};
};

export default connect(null, mapDispatchToProps)(PropertyForm);
