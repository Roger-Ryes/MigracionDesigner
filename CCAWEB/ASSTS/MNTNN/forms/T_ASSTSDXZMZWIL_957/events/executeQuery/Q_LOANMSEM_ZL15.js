//LoanItemsListQuery Entity: LoanItemsList
task.executeQuery.Q_LOANMSEM_ZL15 = function (executeQueryEventArgs) {

    executeQueryEventArgs.parameters.operacion = 'S';
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanItemsList = true;
};
