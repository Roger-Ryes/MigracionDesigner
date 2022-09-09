//AmortizationQuery Entity: 
task_executeQuery_Q_AMORTIAN_8237 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;

    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.commons.execServer = executeServer;
};