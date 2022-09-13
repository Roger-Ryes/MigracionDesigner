//Start signature to Callback event to Q_DETAILAP_5973
//designer-hint: 2304: Cannot find name 'task_executeQueryCallback_Q_DETAILAP_5973'.
task_executeQueryCallback_Q_DETAILAP_5973 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryCallbackEventArgs'.
    //designer-hint: 6133: 'executeQueryCallbackEventArgs' is declared but its value is never read.
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    let totalDesembolso: any = 0;
    if (entities.DetailPaymentForm && entities.DetailPaymentForm.length > 0) {
        for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
            totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
        }
    }

    entities.DisbursementResult.sumTotal = totalDesembolso;
    entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal! - entities.DisbursementResult.sumTotal!;
    //designer-hint: 2304: Cannot find name 'diferencia'.
    diferencia =  entities.DisbursementResult.difference;
};
