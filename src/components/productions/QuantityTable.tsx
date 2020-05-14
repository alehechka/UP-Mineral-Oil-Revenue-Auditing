import React from 'react';
import MaterialTable from 'material-table';
import QuantityModel from '../../models/ProductionQuantity';
import moment from 'moment/moment';
import ColumnObjects from './columns.json';
import VariableModal from './VariableModal';

interface Props {
	productionQuantities: QuantityModel[];
}

const QuantityTable = ({ productionQuantities }: Props) => {
	const defaultColumns: any = {
		saleDate: true,
		price: true,
		netValue: true,
		'property.name': true,
		bblMcf: false,
		productionCode: false,
		btuGrav: false,
		grossValue: false,
		grossTaxes: false,
		grossDeducts: false,
		decimalInterest: false,
		interestType: false,
		ownerGrossValue: false,
		taxCode: false,
		ownerStateTax: false,
		deductionCode: false,
		deductions: false,
		ownerNetValue: false,
	};

	const [columnSwitches, setColumnSwitches] = React.useState(defaultColumns);
	const [dialog, openDialog] = React.useState(false);
	const closeDialog = () => {
		openDialog(false);
	};
	const [columns, setColumns] = React.useState([] as any);

	React.useEffect(() => {
		let newColumns: any[] = [];
		columnSwitches.saleDate &&
			newColumns.push({
				...ColumnObjects.saleDate,
				render: (rowData: any) => <div>{moment(rowData.saleDate).calendar()}</div>,
			});
		columnSwitches.productionCode && newColumns.push(ColumnObjects.productionCode);
		columnSwitches.bblMcf && newColumns.push(ColumnObjects.bblMcf);
		columnSwitches.btuGrav && newColumns.push(ColumnObjects.btuGrav);
		columnSwitches.price && newColumns.push(ColumnObjects.price);
		columnSwitches.grossValue && newColumns.push(ColumnObjects.grossValue);
		columnSwitches.grossTaxes && newColumns.push(ColumnObjects.grossTaxes);
		columnSwitches.grossDeducts && newColumns.push(ColumnObjects.grossDeducts);
		columnSwitches.netValue && newColumns.push(ColumnObjects.netValue);
		columnSwitches.decimalInterest && newColumns.push(ColumnObjects.decimalInterest);
		columnSwitches.interestType && newColumns.push(ColumnObjects.interestType);
		columnSwitches.ownerGrossValue && newColumns.push(ColumnObjects.ownerGrossValue);
		columnSwitches.taxCode && newColumns.push(ColumnObjects.taxCode);
		columnSwitches.ownerStateTax && newColumns.push(ColumnObjects.ownerStateTax);
		columnSwitches.deductionCode && newColumns.push(ColumnObjects.deductionCode);
		columnSwitches.deductions && newColumns.push(ColumnObjects.deductions);
		columnSwitches.ownerNetValue && newColumns.push(ColumnObjects.ownerNetValue);
		columnSwitches['property.name'] && newColumns.push(ColumnObjects.property.name);
		setColumns(newColumns);
	}, [columnSwitches]);

	const [data, setData] = React.useState([{}]);

	const mapData = (inputData: QuantityModel[]) => {
		console.log('input', inputData);
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
				columns={columns}
				data={data}
				options={{
					search: true,
					filtering: true,
					actionsColumnIndex: -1,
					tableLayout: 'auto',
				}}
				editable={{
					// onRowAdd: (newData) =>
					// 	new Promise((resolve, reject) => {
					// 		setData([...data, newData]);
					// 		resolve();
					// 	}),
					onRowDelete: (removedData) =>
						new Promise((resolve, reject) => {
							let index = data.indexOf(removedData);
							setData([...data.slice(0, index), ...data.slice(index + 1)]);
							resolve();
						}),
					onRowUpdate: (newData, oldData) =>
						new Promise((resolve, reject) => {
							setData(data.map((datum) => (datum === oldData ? newData : datum)));
							resolve();
						}),
				}}
				actions={[
					{
						icon: 'add_box',
						isFreeAction: true,
						onClick: () => console.log('add'),
					},
					{
						icon: 'table_chart',
						isFreeAction: true,
						onClick: () => openDialog(true),
					},
					{
						icon: 'info',
						isFreeAction: true,
						onClick: () => console.log('info'),
					},
				]}
			/>
			<VariableModal
				closeDialog={closeDialog}
				dialogOpen={dialog}
				columnSwitches={columnSwitches}
				setColumnSwitches={setColumnSwitches}
				defaultColumns={defaultColumns}
			/>
		</div>
	);
};

export default QuantityTable;
