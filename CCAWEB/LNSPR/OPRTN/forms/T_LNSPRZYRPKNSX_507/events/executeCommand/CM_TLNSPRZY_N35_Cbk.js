//Start signature to Callback event to CM_TLNSPRZY_N35
task.executeCommandCallback.CM_TLNSPRZY_N35 = function(entities, executeCommandCallbackEventArgs) {
    
       executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
            objLoans: entities.LoanList,
        //objErrores: errorPaymentsMasive,
        objErrores: entities.ErrorMassivePayments
        });
};
