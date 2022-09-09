//SummaryLoanStatusQuery Entity: 
task.executeQuery.Q_SUMMARST_6100 = function(executeQueryEventArgs){
    executeQueryEventArgs.parameters.banco = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
    if (executeQueryEventArgs.commons.api.parentVc && executeQueryEventArgs.commons.api.parentVc.id == 'VC_LOANSHISOO_808949') {
        executeQueryEventArgs.parameters.historico = 'S';
    }
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters. = true;
};