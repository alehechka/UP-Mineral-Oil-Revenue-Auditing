import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.quantityChanged = functions.firestore
	.document('operators/{operatorId}/checks/{checkId}')
	.onUpdate((change, context) => {
		// const before = change.before.data();
		// const after = change.after.data();
		// if (!differenceExists(before, after)) {
		// 	let totalPrice = 0,
		// 		totalGrossValue = 0,
		// 		totalNetValue = 0;
		// 	for (let quant of after?.productionQuantities) {
		// 		totalPrice += quant.price;
		// 		totalGrossValue += quant.grossValue;
		// 		totalNetValue += quant.netValue;
		// 	}
		// 	if (differenceExists(after, { totalPrice, totalNetValue, totalGrossValue })) {
		// 		return admin
		// 			.firestore()
		// 			.collection('operators/{operatorId}/checks')
		// 			.doc(change.after.id)
		// 			.set({ totalPrice, totalGrossValue, totalNetValue }, { merge: true });
		// 	}
		// }
		return null;
	});
