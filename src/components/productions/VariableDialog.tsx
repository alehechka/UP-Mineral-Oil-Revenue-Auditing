import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '../reusable/CustomDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';

interface Props {
	dialogOpen: boolean;
	closeDialog: () => void;
	setColumns: (columns: any[]) => void;
	columns: any[];
}

const VariableDialog = ({ dialogOpen, closeDialog, setColumns, columns }: Props) => {
	const state = React.useState({});

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;
		const temp = columns;
		temp[parseInt(name)].hidden = !checked;
		setColumns(temp);
		state[1]({ reset: false });
	};

	const resetColumnSwitches = () => {
		const temp = columns;
		for (let column of temp) {
			column.hidden = true;
		}
		setColumns(temp);
		state[1]({ reset: true });
	};

	return (
		<Dialog open={dialogOpen} onClose={closeDialog}>
			<DialogTitle id='customizes-dialog-title' onClose={closeDialog}>
				Variable Columns
			</DialogTitle>
			<DialogContent dividers>
				<Grid container spacing={2}>
					{columns.map((column, index) => {
						return (
							<Grid item xs={4} key={index}>
								<FormControlLabel
									control={
										<Checkbox checked={!column.hidden} onChange={handleCheckboxChange} name={`${index}`} />
									}
									label={column.title}
								/>
							</Grid>
						);
					})}
				</Grid>
			</DialogContent>
			<DialogActions>
				<Button onClick={resetColumnSwitches} color='primary'>
					Reset
				</Button>
				<Button onClick={closeDialog} color='primary' variant='contained'>
					Save
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default VariableDialog;
