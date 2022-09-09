// (Button) 
    task_executeCommand_CM_TPROJECT_N0M = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        
        if (entities.Loan.status == 'NO VIGENTE' || entities.Loan.status == 'CANCELADO' || entities.Loan.status == 'CREDITO' || entities.Loan.status == 'COMEX') {
            executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ESTADONPO_17159', false, null, timer);
    } else {
executeCommandEventArgs.commons.execServer = true;

        }
    };