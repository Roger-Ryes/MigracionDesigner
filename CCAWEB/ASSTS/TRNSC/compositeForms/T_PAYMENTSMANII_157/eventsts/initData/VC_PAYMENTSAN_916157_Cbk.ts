//Start signature to callBack event to VC_PAYMENTSAN_916157
    //designer-hint: 2304: Cannot find name 'task_initDataCallback_VC_PAYMENTSAN_916157'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelInitDataEventArgs'.
    //designer-hint: 6133: 'initDataEventArgs' is declared but its value is never read.
    task_initDataCallback_VC_PAYMENTSAN_916157 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    entities.Payment.prePaymentAux = entities.Payment.amountPrepayment;
    entities.Payment.amountPayAux = entities.Payment.amountPayment;
   // entities.Loan.balanceDue = entities.Payment.amountPayAux;
    entities.Payment.operationTypeId = entities.Loan.operatioTypeID;
   

    };