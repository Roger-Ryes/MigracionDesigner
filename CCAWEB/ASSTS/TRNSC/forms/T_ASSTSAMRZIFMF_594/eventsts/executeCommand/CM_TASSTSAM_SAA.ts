


// (Button) 
task_executeCommand_CM_TASSTSAM_SAA = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};