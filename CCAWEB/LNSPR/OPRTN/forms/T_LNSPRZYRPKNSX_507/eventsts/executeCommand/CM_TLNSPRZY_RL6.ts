// (Button) 
task_executeCommand_CM_TLNSPRZY_RL6 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let auxData: any = [];
    let count: any = 0;
    if (entities.LoanList) {
        entities.LoanList.forEach((itemData: any) => {
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
        executeCommandEventArgs.commons.api.navigation.closeModal({});
    }
};
