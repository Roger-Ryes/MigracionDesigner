
//LoanDebtorQuery Entity: 
task.executeQuery.Q_LOANDEBB_6719 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    
    executeQueryEventArgs.parameters.pagDeu = 0;
    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_6719_92672', ['customerID'], executeQueryEventArgs);
    if (executeQueryEventArgs.config.appendRecords) {
     executeQueryEventArgs.parameters.pagDeu = executeQueryEventArgs.parameters.customerID;
    }
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};