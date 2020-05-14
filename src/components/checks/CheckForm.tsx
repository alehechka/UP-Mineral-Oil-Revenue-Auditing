import React from 'react';
import CheckModel from '../../models/Check';
import OperatorModel from '../../models/Operator';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { createGeneric } from '../../store/actions/genericActions';

interface Props {
	setActive: (active: boolean) => void;
	operator: OperatorModel;
	operatorUID: string;
	createGeneric: (collection: string, check: CheckModel) => any;
}

const CheckForm = ({ setActive, operatorUID, createGeneric }: Props) => {
	const { handleSubmit, register, formState, reset } = useForm<CheckModel>({ mode: 'onChange' });
	const [submit, setSubmit] = React.useState(false);
	const onSubmit = (values: CheckModel) => {
		setSubmit(true);
		createGeneric(`operators/${operatorUID}/checks`, {
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
					<label htmlFor='checkNumber'>Check Number</label>
					<input type='number' id='checkNumber' name='checkNumber' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='amount'>Amount</label>
					<input type='number' step='0.01' id='amount' name='amount' ref={register({ required: true })} />
				</div>
				<div className='input-field'>
					<label htmlFor='checkDate'>Date</label>
					<input type='date' id='checkDate' name='checkDate' ref={register({ required: true })} />
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
		createGeneric: (collection: string, check: CheckModel) => dispatch(createGeneric(collection, check)),
	};
};

export default connect(null, mapDispatchToProps)(CheckForm);
