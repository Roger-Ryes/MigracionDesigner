//FormaPagoQuery Entity: FormaPago
task_executeQuery_Q_APAGOOOO_YV30 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    executeQueryEventArgs.parameters.currency = executeQueryEventArgs.commons.api.vc.model.OperationEntity.money;
    executeQueryEventArgs.parameters.opType = executeQueryEventArgs.commons.api.vc.model.OperationEntity.typeOperation;
    /* if (executeQueryEventArgs.parameters.currency == 0) {
        executeQueryEventArgs.commons.execServer = true;
    } else {
        executeQueryEventArgs.commons.execServer = executeQueryEventArgs.parameters.currency ? true : false;
     }*/
    //executeQueryEventArgs.commons.serverParameters.FormaPago = true; 

    executeQueryEventArgs.commons.execServer = (executeQueryEventArgs.parameters.currency == 0 || executeQueryEventArgs.parameters.currency) ? true : false;
};