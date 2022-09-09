// (Button) 
task.executeCommand.CM_TLNSPRMF_22S = function(entities, executeCommandEventArgs) {
executeCommandEventArgs.commons.execServer = true;
    lote = entities.MassivePayments.data()[0].lotePM;
return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPAGARAD_24782").then(
        function (response) {
            
            switch (response.buttonIndex) {
                
                case 0: //cancel
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                    executeCommandEventArgs.commons.execServer = true;
                    return true;
                    break;
            }
        }
    );
};