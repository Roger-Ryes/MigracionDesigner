//DetailPaymentFormQuery Entity: 
    //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_DETAILAP_5973'.
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
    task_executeQuery_Q_DETAILAP_5973 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.commons.serverParameters.DisbursementResult = true;
    executeQueryEventArgs.commons.serverParameters.Loan = true;
    executeQueryEventArgs.commons.serverParameters.LiquidateResult = true;
        executeQueryEventArgs.commons.execServer = true;

};
