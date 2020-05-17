import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '../reusable/CustomDialog';
import { Grid, Button, Dialog } from '@material-ui/core';
import QuantityModel from '../../models/ProductionQuantity';

interface Props {
	dialogOpen: boolean;
	closeDialog: () => void;
	defaultValues?: QuantityModel;
}

const QuantityDialog = ({ dialogOpen, closeDialog }: Props) => {
	return (
		<Dialog open={dialogOpen} onClose={closeDialog}>
			<DialogTitle id='customizes-dialog-title' onClose={closeDialog}>
				Production Quantity
			</DialogTitle>
			<DialogContent dividers>
				<Grid container spacing={2}></Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => console.log('reset')} color='primary'>
					Reset
				</Button>
				<Button onClick={() => console.log('save')} color='primary' variant='contained'>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default QuantityDialog;
