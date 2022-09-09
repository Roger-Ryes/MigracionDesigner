//LoanChildrenQuery Entity: LoanChildren
    task_executeQuery_Q_LOANNRCH_EQ75 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.LoanChildren = true;
    };