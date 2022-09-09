//Start signature to Callback event to VC_DISBURSEMT_116810
task.initDataCallback.VC_DISBURSEMT_116810 = function (entities, initDataCallbackEventArgs) {
    angular.element(document).injector().get('container.containerInfoService').getProcessDate().then(function (processDate) {
        //se asume fecha de proceso MM/dd/yyyy caso contrario falla
        var parts = processDate.split('/');
        // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
        // January - 0, February - 1, etc.
        entities.LoanAdditionalInformation.dateToDisburse = new Date(parts[2], parts[0] - 1, parts[1]);

    });
    entities.LoanAdditionalInformation.dateToDisburse = kendo.toString(kendo.parseDate(entities.LoanAdditionalInformation.dateToDisburse), JSON.parse(sessionStorage.dateFormat));

    if (initDataCallbackEventArgs.success) {
       
        var totalDesembolso = 0;
        if (entities.DetailPaymentForm.data().length > 0) {
            for (var i = 0; i < entities.DetailPaymentForm.data().length; i++) {
                totalDesembolso = totalDesembolso + entities.DetailPaymentForm.data()[i].amountOp;
            }
        }

        entities.DisbursementResult.sumTotal = totalDesembolso;
        entities.DisbursementResult.difference = entities.LiquidateResult.sumTotal - entities.DisbursementResult.sumTotal;
        diferencia =  entities.DisbursementResult.difference;
    }
};
