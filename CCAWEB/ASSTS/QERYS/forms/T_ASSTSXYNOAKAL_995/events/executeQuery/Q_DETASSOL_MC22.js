//DetailTransactionQuery Entity: DetailTransaction
task.executeQuery.Q_DETASSOL_MC22 = function(executeQueryEventArgs){

    if (executeQueryEventArgs.commons.api.parentVc.parentVc &&
        executeQueryEventArgs.commons.api.parentVc.parentVc.id ==
        'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().bankId;
    executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().secuential;
    executeQueryEventArgs.parameters.dividendo = null;   
    executeQueryEventArgs.parameters.concepto = null; 
     executeQueryEventArgs.parameters.estado = null;  
    
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_RT22_BLD64', ['dividend','heading','state'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.dividendo = executeQueryEventArgs.parameters.dividend;
        executeQueryEventArgs.parameters.concepto = executeQueryEventArgs.parameters.heading;
        executeQueryEventArgs.parameters.estado = executeQueryEventArgs.parameters.state;
} 
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.DetailTransaction = true;
};