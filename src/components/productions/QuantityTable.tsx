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
    console.log(productionQuantities)
    const columns: any = [
        {title: "Sale Date", field: "saleDate", render: (rowData:any) => <div>{moment(rowData.saleDate).calendar()}</div>},
        {title: "Production Code", field: "productionCode"},
        {title: "BBL MCF", field: "bblMcf"},
        {title: "BTU GRAV", field: "btuGrav"},
        {title: "Price", field: "price", type: "currency"},
        {title: "Gross Value", field: "grossValue", type: "currency"},
        {title: "Gross Taxes", field: "grossTaxes", type: "currency"},
        {title: "Gross Deducts", field: "grossDeducts", type: "currency"},
        {title: "Net Value", field: "netValue", type: "currency"},
        {title: "Decimal Interest", field: "decimalInterest"},
        {title: "Int Type", field: "intType"},
        {title: "Owner Gross Value", field: "ownerGrossValue", type: "currency"},
        {title: "Tax Code", field: "taxCode"},
        {title: "Owner State Tax", field: "ownerStateTax", type: "currency"},
        {title: "Deduction Code", field: "deductionCode"},
        {title: "Deductions", field: "deductions", type: "currency"},
        {title: "Owner Net Value", field: "ownerNetValue", type: "currency"},
        {title: "Property Name", field: "property.name"},

    ];
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