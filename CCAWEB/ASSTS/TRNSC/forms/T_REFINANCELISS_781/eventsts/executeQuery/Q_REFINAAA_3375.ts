//RenewableOperationsQuery Entity: 
    //designer-hint: 2304: Cannot find name 'task_executeQuery_Q_REFINAAA_3375'.
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteQueryEventArgs'.
    task_executeQuery_Q_REFINAAA_3375 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.client = executeQueryEventArgs.commons.api.vc.model.RefinanceLoanFilter.clientID;
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters. = true;
    };