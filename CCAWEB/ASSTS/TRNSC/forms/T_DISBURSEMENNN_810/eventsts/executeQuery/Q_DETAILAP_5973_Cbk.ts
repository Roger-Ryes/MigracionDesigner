//Start signature to Callback event to Q_DETAILAP_5973
task_executeQueryCallback_Q_DETAILAP_5973 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    let totalDesembolso: any = 0;
    if (entities.DetailPaymentForm && entities.DetailPaymentForm.length > 0) {
        for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
            totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
        }
    }

    entities.DisbursementResult.sumTotal = totalDesembolso;
    entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal - entities.DisbursementResult.sumTotal;
    diferencia =  entities.DisbursementResult.difference;
};
