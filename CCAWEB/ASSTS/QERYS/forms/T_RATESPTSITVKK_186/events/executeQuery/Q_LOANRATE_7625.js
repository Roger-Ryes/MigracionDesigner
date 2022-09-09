//LoanRatesQuery Entity: LoanRates
task.executeQuery.Q_LOANRATE_7625 = function(executeQueryEventArgs){
    var executeServer = true;
   
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_7625_68514', ['sequential'], executeQueryEventArgs);
    
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.sequential;
    }
    
    
    executeQueryEventArgs.commons.execServer = executeServer;
};