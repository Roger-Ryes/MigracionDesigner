//LoanIntercycleQuery Entity: LoanIntercycle
    task.executeQuery.Q_LOANLIIR_OP62 = function(executeQueryEventArgs){
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.LoanIntercycle = true;
    };