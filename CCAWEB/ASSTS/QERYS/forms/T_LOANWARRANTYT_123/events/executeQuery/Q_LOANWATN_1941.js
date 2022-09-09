
//LoanWarrantyQuery Entity: LoanWarranty
task.executeQuery.Q_LOANWATN_1941 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    
    executeQueryEventArgs.parameters.pagGarantia = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_1941_28530', ['warranty'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
     executeQueryEventArgs.parameters.pagGarantia = executeQueryEventArgs.parameters.warranty;
    }

    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.LoanWarranty = true;
};