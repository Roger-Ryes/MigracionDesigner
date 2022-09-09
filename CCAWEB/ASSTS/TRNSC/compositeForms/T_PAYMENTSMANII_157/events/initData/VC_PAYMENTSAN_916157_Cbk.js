//Start signature to callBack event to VC_PAYMENTSAN_916157
    task.initDataCallback.VC_PAYMENTSAN_916157 = function(entities, initDataEventArgs) {
    entities.Payment.prePaymentAux = entities.Payment.amountPrepayment;
    entities.Payment.amountPayAux = entities.Payment.amountPayment;
   // entities.Loan.balanceDue = entities.Payment.amountPayAux;
    entities.Payment.operationTypeId = entities.Loan.operatioTypeID;
   

    };