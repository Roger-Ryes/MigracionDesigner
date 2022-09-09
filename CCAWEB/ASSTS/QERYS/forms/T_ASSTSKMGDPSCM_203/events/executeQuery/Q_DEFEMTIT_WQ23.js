
//DeferredItemsListQuery Entity: DeferredItemsList
task.executeQuery.Q_DEFEMTIT_WQ23 = function(executeQueryEventArgs){
    var deferred = executeQueryEventArgs.commons.api.vc.model.DeferredItemsList;
    var exec = true;
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
       
    executeQueryEventArgs.parameters.opcion = "T";
       
    //Paginación
    executeQueryEventArgs.parameters.dividend = 0;
    
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_JT23_FZW47', ['dividend'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords && executeQueryEventArgs.parameters.dividend != null && deferred) {
        executeQueryEventArgs.parameters.opcion = "S";
        executeQueryEventArgs.parameters.spid = deferred.data()[0].sesion;
        executeQueryEventArgs.parameters.dividend = executeQueryEventArgs.parameters.dividend;           
    }else{
        exec = false;
    }
    
    executeQueryEventArgs.commons.execServer = exec;
    
};