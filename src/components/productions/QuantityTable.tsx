import React from 'react';
import MaterialTable from 'material-table';
import QuantityModel from '../../models/ProductionQuantity';

interface Props {
    productionQuantities: QuantityModel[]
}

const QuantityTable = ({productionQuantities}: Props) => {
    console.log(productionQuantities)
    const columns: any[] = [];
    const data: QuantityModel[] = [];
    return (
        <div>
            <MaterialTable title="Production Quantities" columns={columns} data={data}/>
        </div>
    )
}

export default QuantityTable;