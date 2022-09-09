//LoanChildrenQuery Entity: LoanChildren
    task.executeQuery.Q_LOANNRCH_EQ75 = function(executeQueryEventArgs){
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.LoanChildren = true;
    };