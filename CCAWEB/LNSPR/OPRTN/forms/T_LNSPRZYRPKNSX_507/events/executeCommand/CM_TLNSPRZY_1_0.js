// (Button) 
task.executeCommand.CM_TLNSPRZY_1_0 = function(entities, executeCommandEventArgs) {
    
    var auxData = [];
     entities.LoanList.forEach(function (itemData) {
        if (itemData.loanBankID) {
            auxData.push(itemData);
        }
    })
    entities.LoanList = auxData;

    return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGULE_29395").then(
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