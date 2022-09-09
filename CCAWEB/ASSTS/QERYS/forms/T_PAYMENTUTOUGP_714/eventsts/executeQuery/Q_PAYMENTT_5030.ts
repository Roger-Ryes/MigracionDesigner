//PaymentQuery Entity: 
task_executeQuery_Q_PAYMENTT_5030 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    executeQueryEventArgs.parameters.secuencial = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_5030_22532', ['sequential'], executeQueryEventArgs);
    
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.secuencial = executeQueryEventArgs.parameters.sequential;
    }
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};