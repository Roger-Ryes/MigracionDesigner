//ReadjustmentLoanCabQuery_5831 Entity: 
task_executeQuery_Q_REAJUSBC_5831 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.next = null;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_5831_17646', ['date'], executeQueryEventArgs);
    
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.next = executeQueryEventArgs.parameters.date;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};