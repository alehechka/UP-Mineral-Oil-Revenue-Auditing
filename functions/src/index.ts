import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

function differenceExists(before: any, after: any) {
    return (before?.totalPrice !== after?.totalPrice ||
        before?.totalGrossValue !== after?.totalGrossValue ||
        before?.totalNetValue !== after?.totalNetValue)
}

exports.quantityChanged = functions.firestore
    .document('checks/{checkId}')
    .onUpdate((change, context) => {
        const before = change.before.data();
        const after = change.after.data();
        if (!differenceExists(before, after)) {
            let totalPrice = 0, totalGrossValue = 0, totalNetValue = 0;
            for (let quant of after?.productionQuantities) {
                totalPrice += quant.price;
                totalGrossValue += quant.grossValue;
                totalNetValue += quant.netValue;
            }
            if (differenceExists(after, { totalPrice, totalNetValue, totalGrossValue })) {
                return admin.firestore()
                    .collection('checks')
                    .doc(change.after.id)
                    .set({ totalPrice, totalGrossValue, totalNetValue }, { merge: true })
            }
        }
        return null;
    })

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
