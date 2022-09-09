//LoanIntercycleQuery Entity: LoanIntercycle
    task_executeQuery_Q_LOANLIIR_OP62 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.LoanIntercycle = true;
    };