


// (Button) 
task_executeCommand_CM_TASSTSGG_ATT = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};