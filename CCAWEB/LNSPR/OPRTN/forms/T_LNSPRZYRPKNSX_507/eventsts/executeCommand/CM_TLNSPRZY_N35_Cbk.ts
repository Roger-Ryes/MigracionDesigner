//Start signature to Callback event to CM_TLNSPRZY_N35
task_executeCommandCallback_CM_TLNSPRZY_N35 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    
       executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
            objLoans: entities.LoanList,
        //objErrores: errorPaymentsMasive,
        objErrores: entities.ErrorMassivePayments
        });
};
