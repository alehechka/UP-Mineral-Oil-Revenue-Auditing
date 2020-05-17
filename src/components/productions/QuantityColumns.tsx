import React from 'react';
import moment from 'moment/moment';
import { Column } from 'material-table';

export const QuantityColumns: Column<{}>[] = [
	{
		title: 'Sale Date',
		field: 'saleDate',
		hidden: false,
		render: (rowData: any) => <div>{moment(rowData.saleDate).calendar()}</div>,
	},
	{ title: 'Production Code', field: 'productionCode', hidden: true },
	{
		title: 'BBL MCF',
		field: 'bblMcf',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'BTU GRAV',
		field: 'btuGrav',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'Price',
		field: 'price',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: false,
	},
	{
		title: 'Gross Taxes',
		field: 'grossTaxes',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'Gross Taxes',
		field: 'grossTaxes',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'Gross Deducts',
		field: 'grossDeducts',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'Net Value',
		field: 'netValue',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: false,
	},
	{
		title: 'Decimal Interest',
		field: 'decimalInterest',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{ title: 'Interest Type', field: 'interestType', hidden: true },
	{
		title: 'Owner Gross Value',
		field: 'ownerGrossValue',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{ title: 'Tax Code', field: 'taxCode', hidden: true },
	{
		title: 'Owner State Tax',
		field: 'ownerStateTax',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{ title: 'Deduction Code', field: 'deductionCode', hidden: true },
	{
		title: 'Deductions',
		field: 'deductions',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{
		title: 'Owner Net Value',
		field: 'ownerNetValue',
		type: 'currency',
		searchable: false,
		filtering: false,
		hidden: true,
	},
	{ title: 'Property Name', field: 'property.name', hidden: false },
];