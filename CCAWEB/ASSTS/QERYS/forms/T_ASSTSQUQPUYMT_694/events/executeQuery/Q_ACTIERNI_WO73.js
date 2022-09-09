//ActiveTransactionQuery Entity: ActiveTransaction
task.executeQuery.Q_ACTIERNI_WO73 = function(executeQueryEventArgs){
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
   executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_HK73_UEC23', ['secuential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.secuential;
}
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ActiveTransaction = true;
};