//Start signature to Callback event to Q_DETAILAP_5973
task.executeQueryCallback.Q_DETAILAP_5973 = function (entities, executeQueryCallbackEventArgs) {
    var totalDesembolso = 0;
    if (entities.DetailPaymentForm && entities.DetailPaymentForm.data().length > 0) {
        for (var i = 0; i < entities.DetailPaymentForm.data().length; i++) {
            totalDesembolso = totalDesembolso + entities.DetailPaymentForm.data()[i].amountOp;
        }
    }

    entities.DisbursementResult.sumTotal = totalDesembolso;
    entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal - entities.DisbursementResult.sumTotal;
    diferencia =  entities.DisbursementResult.difference;
};
