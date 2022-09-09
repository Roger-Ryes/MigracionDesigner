//SegurosQuery Entity: Seguros
    task_executeQuery_Q_SEGUSSRS_HF84 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.Seguros = true;
    };