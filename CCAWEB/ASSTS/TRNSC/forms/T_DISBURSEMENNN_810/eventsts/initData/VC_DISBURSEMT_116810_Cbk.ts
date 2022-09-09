//Start signature to Callback event to VC_DISBURSEMT_116810
task_initDataCallback_VC_DISBURSEMT_116810 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    let processDate = this.cobis.container.info.getProcessDate();
    //se asume fecha de proceso MM/dd/yyyy caso contrario falla
    let parts: any = processDate.split('/');
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    entities.LoanAdditionalInformation.dateToDisburse = new Date(parts[2], parts[0] - 1, parts[1]);

    entities.LoanAdditionalInformation.dateToDisburse = kendo.toString(kendo.parseDate(entities.LoanAdditionalInformation.dateToDisburse), JSON.parse(sessionStorage.dateFormat));

    if (initDataCallbackEventArgs.success) {
        let totalDesembolso: any = 0;
        if (entities.DetailPaymentForm.length > 0) {
            for (let i: any = 0; i < entities.DetailPaymentForm.length; i++) {
                totalDesembolso = totalDesembolso + entities.DetailPaymentForm[i].amountOp;
            }
        }

        entities.DisbursementResult.sumTotal = totalDesembolso;
        entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal - entities.DisbursementResult.sumTotal;
        diferencia =  entities.DisbursementResult.difference;
    }
};
