//LoanItemsListQuery Entity: LoanItemsList
task_executeQuery_Q_LOANMSEM_ZL15 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {

    executeQueryEventArgs.parameters.operacion = 'S';
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanItemsList = true;
};
