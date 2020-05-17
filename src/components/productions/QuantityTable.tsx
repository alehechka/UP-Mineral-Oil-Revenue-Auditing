import React from 'react';
import MaterialTable from 'material-table';
import QuantityModel from '../../models/ProductionQuantity';
import { QuantityColumns } from './QuantityColumns';
import VariableModal from './VariableDialog';
import QuantityDialog from './QuantityDialog';

interface Props {
	productionQuantities: QuantityModel[];
}

const QuantityTable = ({ productionQuantities }: Props) => {
	const [columnDialog, openColumnDialog] = React.useState(false);
	const [quantityDialog, openQuantityDialog] = React.useState(false);

	const [columns, setColumns] = React.useState(QuantityColumns);

	const [data, setData] = React.useState([{}]);

	const mapData = (inputData: QuantityModel[]) => {
		return inputData?.map((datum) => {
			return {
				...datum,
				saleDate: new Date(datum.saleDate),
			};
		});
	};

	React.useEffect(() => {
		setData(mapData(productionQuantities));
	}, [productionQuantities]);

	return (
		<div>
			<MaterialTable
				title='Production Quantities'
				columns={columns.filter((column: any) => !column.hidden)}
				data={data}
				options={{
					search: true,
					filtering: true,
					actionsColumnIndex: -1,
					tableLayout: 'auto',
				}}
				editable={{
					onRowDelete: (removedData) =>
						new Promise((resolve, reject) => {
							let index = data.indexOf(removedData);
							setData([...data.slice(0, index), ...data.slice(index + 1)]);
							resolve();
						}),
				}}
				actions={[
					{
						icon: 'add_box',
						isFreeAction: true,
						onClick: () => openQuantityDialog(true),
					},
					{
						icon: 'table_chart',
						isFreeAction: true,
						onClick: () => openColumnDialog(true),
					},
					// {
					// 	icon: 'info',
					// 	isFreeAction: true,
					// 	onClick: () => console.log('info'),
					// },
					{
						icon: 'create',
						onClick: () => console.log('edit'),
					},
				]}
			/>
			<VariableModal
				closeDialog={() => openColumnDialog(false)}
				dialogOpen={columnDialog}
				columns={QuantityColumns}
				setColumns={setColumns}
			/>
			<QuantityDialog closeDialog={() => openQuantityDialog(false)} dialogOpen={quantityDialog} />
		</div>
	);
};

export default QuantityTable;
