// (Button) 
task.executeCommand.CM_TASSTSEF_N17 = function (entities, executeCommandEventArgs) {
    if (diferencia != 0) {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ERRORELDR_83907', false, null, timer);
    } else {
        executeCommandEventArgs.commons.execServer = true;
    }

    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};
