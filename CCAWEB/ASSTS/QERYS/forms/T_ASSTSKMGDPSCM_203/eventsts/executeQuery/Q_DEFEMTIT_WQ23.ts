
//DeferredItemsListQuery Entity: DeferredItemsList
task_executeQuery_Q_DEFEMTIT_WQ23 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let deferred: any = executeQueryEventArgs.commons.api.vc.model.DeferredItemsList;
    let exec: any = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;

    executeQueryEventArgs.parameters.opcion = "T";

    //Paginación
    executeQueryEventArgs.parameters.dividend = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_JT23_FZW47', ['dividend'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords && executeQueryEventArgs.parameters.dividend != null && deferred) {
        executeQueryEventArgs.parameters.opcion = "S";
        executeQueryEventArgs.parameters.spid = deferred.data()[0].sesion;
        executeQueryEventArgs.parameters.dividend = executeQueryEventArgs.parameters.dividend;           
    }else{
        exec = false;
    }

    executeQueryEventArgs.commons.execServer = exec;
};