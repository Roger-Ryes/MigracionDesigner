//AmortizationQuery Entity: 
task.executeQuery.Q_AMORTIAN_8237 = function(executeQueryEventArgs){
    var executeServer = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;

    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.commons.execServer = executeServer;
};