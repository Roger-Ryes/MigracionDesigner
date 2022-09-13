//Start signature to callBack event to VC_PAYMENTSAN_916157
    task_initDataCallback_VC_PAYMENTSAN_916157 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Payment.prePaymentAux = entities.Payment.amountPrepayment;
    entities.Payment.amountPayAux = entities.Payment.amountPayment;
   // entities.Loan.balanceDue = entities.Payment.amountPayAux;
    entities.Payment.operationTypeId = entities.Loan.operatioTypeID;
   

    };