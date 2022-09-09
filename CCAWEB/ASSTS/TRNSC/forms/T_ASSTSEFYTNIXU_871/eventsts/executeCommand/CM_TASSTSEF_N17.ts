// (Button) 
task_executeCommand_CM_TASSTSEF_N17 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    if (diferencia != 0) {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ERRORELDR_83907', false, null, timer);
    } else {
        executeCommandEventArgs.commons.execServer = true;
    }

    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};
