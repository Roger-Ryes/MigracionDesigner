// (Button) 
task_executeCommand_CM_TLNSPRWQ_853 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
    let auxList: any = entities.MassivePayments.slice(count * limit, (count * limit) + limit);
    entities.Payment = auxList;
    entities.LoanSearchFilter.sequential = numRep;
    if (count == 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_SEPROCEED_91441', false, [numRep], timer);
    }
};