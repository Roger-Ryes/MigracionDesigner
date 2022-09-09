//PaymentDetailQuery Entity: 
task_executeQuery_Q_PAYMENTT_1707 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    if (executeQueryEventArgs.commons.api.parentApi()?.parentVc && executeQueryEventArgs.commons.api.parentApi()?.parentVc?.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    executeQueryEventArgs.parameters.secPago = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_1707_26229', ['sequential'], executeQueryEventArgs);
    
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.secPago = executeQueryEventArgs.parameters.sequential;
    }
    executeQueryEventArgs.commons.execServer = true;
    
};