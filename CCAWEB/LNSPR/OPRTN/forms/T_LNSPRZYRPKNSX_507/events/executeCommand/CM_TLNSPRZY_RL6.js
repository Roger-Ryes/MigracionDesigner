// (Button) 
task.executeCommand.CM_TLNSPRZY_RL6 = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var auxData = [];
    var count = 0;
    if (entities.LoanList) {
        entities.LoanList.forEach(function (itemData) {
            if (itemData.lote) {
                count++;
            }
        })
    }

    if (count > 0) {
        executeCommandEventArgs.commons.api.navigation.closeModal({
            objLoans: entities.LoanList,
           //objErrores: errorPaymentsMasive
            objData: entities.MassivePayments,
            objErrores: entities.ErrorMassivePayments
        });

    } else {
        executeCommandEventArgs.commons.api.vc.closeModal({});
    }

};
