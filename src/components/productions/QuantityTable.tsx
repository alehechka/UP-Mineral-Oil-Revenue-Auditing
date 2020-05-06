import React from 'react';
import MaterialTable from 'material-table';
import QuantityModel from '../../models/ProductionQuantity';
import moment from 'moment/moment';

interface Props {
    productionQuantities: QuantityModel[]
}

const mapData = (inputData: QuantityModel[]) => {
    return inputData.map(datum => {
        return {
            ...datum,
            saleDate: datum.saleDate.toDate()
        }
    })
}

const QuantityTable = ({productionQuantities}: Props) => {

    const [columnSwitches, setColumnSwitches] = React.useState({saleDate: true, price: true, netValue: true, property: {name: true}} as any);

    const [columns, setColumns] = React.useState([] as any);

    React.useEffect(() => {
        let newColumns: any[] = [];
        columnSwitches.saleDate && newColumns.push({title: "Sale Date", field: "saleDate", render: (rowData:any) => <div>{moment(rowData.saleDate).calendar()}</div>});
        columnSwitches.productionCode && newColumns.push({title: "Production Code", field: "productionCode"});
        columnSwitches.bblMcf && newColumns.push({title: "BBL MCF", field: "bblMcf"});
        columnSwitches.btuGrav && newColumns.push({title: "BTU GRAV", field: "btuGrav"});
        columnSwitches.price && newColumns.push({title: "Price", field: "price", type: "currency"});
        columnSwitches.grossValue && newColumns.push({title: "Gross Value", field: "grossValue", type: "currency"});
        columnSwitches.grossTaxes && newColumns.push({title: "Gross Taxes", field: "grossTaxes", type: "currency"});
        columnSwitches.grossDeducts && newColumns.push({title: "Gross Deducts", field: "grossDeducts", type: "currency"});
        columnSwitches.netValue && newColumns.push({title: "Net Value", field: "netValue", type: "currency"});
        columnSwitches.decimalInterest && newColumns.push({title: "Decimal Interest", field: "decimalInterest"});
        columnSwitches.intType && newColumns.push({title: "Interest Type", field: "intType"});
        columnSwitches.ownerGrossValue && newColumns.push({title: "Owner Gross Value", field: "ownerGrossValue", type: "currency"});
        columnSwitches.taxCode && newColumns.push({title: "Tax Code", field: "taxCode"});
        columnSwitches.ownerStateTax && newColumns.push({title: "Owner State Tax", field: "ownerStateTax", type: "currency"});
        columnSwitches.deductionCode && newColumns.push({title: "Deduction Code", field: "deductionCode"});
        columnSwitches.deductions && newColumns.push({title: "Deductions", field: "deductions", type: "currency"});
        columnSwitches.ownerNetValue && newColumns.push({title: "Owner Net Value", field: "ownerNetValue", type: "currency"});
        columnSwitches.property?.name && newColumns.push({title: "Property Name", field: "property.name"});
        setColumns(newColumns);
    }, [columnSwitches])

    const [data, setData] = React.useState(mapData(productionQuantities));
    return (
        <div>
            <MaterialTable 
                title="Production Quantities" 
                columns={columns} 
                data={data}
                options={{
                    search: true,
                    filtering: true,
                    actionsColumnIndex: -1,
                    tableLayout: "auto"
                }}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setData([...data, newData])
                            resolve();
                        }),
                        onRowDelete: (removedData) => 
                        new Promise((resolve, reject) => {
                            let index = data.indexOf(removedData);
                            setData([...data.slice(0,index), ...data.slice(index+1)]);
                            resolve();
                        }),
                        onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setData(data.map(datum => datum === oldData ? newData : datum))
                            resolve();
                        })
                }}
            />
        </div>
    )
}

export default QuantityTable;