//ReadjustmentLoanCabQuery_5831 Entity: 
task.executeQuery.Q_REAJUSBC_5831 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.next = null;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_5831_17646', ['date'], executeQueryEventArgs);
    
    if (executeQueryEventArgs.config.appendRecords) {
        executeQueryEventArgs.parameters.next = executeQueryEventArgs.parameters.date;
    }
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};