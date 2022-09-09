


// (Button) 
task_executeCommand_CM_TASSTSVI_S4A = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    
    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.serverParameters.Company = true;
};