// (Button) 
task.executeCommand.CM_TLNSPRZY_N35 = function (entities, executeCommandEventArgs) {
    var auxData = [];
     entities.LoanList.forEach(function (itemData) {
        if (itemData.loanBankID) {
            auxData.push(itemData);
        }
      })
    entities.LoanList = auxData;
    return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042").then(
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
  