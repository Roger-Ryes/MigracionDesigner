//LoanSyndicatedListQuery Entity: LoanSyndicatedList
task.executeQuery.Q_LOANIISE_TX62 = function (executeQueryEventArgs) {
    var param = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().parameters;
    executeQueryEventArgs.parameters.bankLS = param.loan.loanBankID

    if (param.loan.fondeadorLS || param.loan.fondeadorLS == 0) {
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = false;
    }


    //executeQueryEventArgs.commons.serverParameters.LoanSyndicatedList = true;
};
