//SegurosQuery Entity: Seguros
    task.executeQuery.Q_SEGUSSRS_HF84 = function(executeQueryEventArgs){
        executeQueryEventArgs.parameters.loanBankID = executeQueryEventArgs.commons.api.navigation.getCustomDialogParameters().loan.loanBankID;
        
         executeQueryEventArgs.commons.execServer = true;
        //executeQueryEventArgs.commons.serverParameters.Seguros = true;
    };