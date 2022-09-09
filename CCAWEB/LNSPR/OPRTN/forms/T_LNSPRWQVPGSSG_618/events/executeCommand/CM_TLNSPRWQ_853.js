// (Button) 
task.executeCommand.CM_TLNSPRWQ_853 = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    var auxList = entities.MassivePayments.data().slice(count * limit, (count * limit) + limit);
    entities.Payment = auxList;
    entities.LoanSearchFilter.sequential = numRep;
    if (count == 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SEPROCEED_91441', false, [numRep], timer);
    }
};