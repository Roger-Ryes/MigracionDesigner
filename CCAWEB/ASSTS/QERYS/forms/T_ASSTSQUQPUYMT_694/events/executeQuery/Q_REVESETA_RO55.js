//ReversedTransactionQuery Entity: ReversedTransaction
task.executeQuery.Q_REVESETA_RO55 = function(executeQueryEventArgs){
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.parentVc.model.Loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_OB55_ZQG31', ['secuential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.secuential;
    }
        executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.ReversedTransaction = true;
};