//LoanEntryQuery Entity: LoanEntry
task_executeQuery_Q_OPERATNY_7536 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = true;
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;

    executeQueryEventArgs.commons.execServer = executeServer;
};