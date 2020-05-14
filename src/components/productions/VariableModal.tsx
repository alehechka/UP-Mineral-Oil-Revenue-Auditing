import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '../reusable/CustomDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { Grid, Checkbox, FormControlLabel } from '@material-ui/core';

interface Props {
	dialogOpen: boolean;
	closeDialog: () => void;
	columnSwitches: any;
	setColumnSwitches: (switches: any) => void;
	defaultColumns: any;
}

const VariableModal = ({
	dialogOpen,
	closeDialog,
	columnSwitches,
	setColumnSwitches,
	defaultColumns,
}: Props) => {
	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = e.target;
		setColumnSwitches({ ...columnSwitches, [name]: checked });
	};

	const resetColumnSwitches = () => {
		setColumnSwitches(defaultColumns);
	};

	return (
		<Dialog open={dialogOpen} onClose={closeDialog}>
			<DialogTitle id='customizes-dialog-title' onClose={closeDialog}>
				Variable Columns
			</DialogTitle>
			<DialogContent dividers>
				<Grid container spacing={2}>
					{Object.keys(columnSwitches).map((key) => {
						return (
							<Grid item xs={4} key={key}>
								<FormControlLabel
									control={
										<Checkbox checked={columnSwitches[key]} onChange={handleCheckboxChange} name={key} />
									}
									label={key}
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

export default VariableModal;
