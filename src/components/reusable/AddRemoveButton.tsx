import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

export default function AddRemoveButton(props: {
	title: string;
	active: boolean;
	setActive: (active: boolean) => any;
}) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
			}}
		>
			<h5>{props.title}</h5>
			<IconButton onClick={() => props.setActive(!props.active)}>
				{props.active ? <DeleteIcon /> : <AddIcon />}
			</IconButton>
		</div>
	);
}
