//LoanEntryQuery Entity: LoanEntry
task.executeQuery.Q_OPERATNY_7536 = function(executeQueryEventArgs){
    var executeServer = true;
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;

    executeQueryEventArgs.commons.execServer = executeServer;
};