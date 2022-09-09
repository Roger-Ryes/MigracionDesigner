// (Button) 
task_executeCommand_CM_TASSTSPE_16S = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    
    executeCommandEventArgs.commons.execServer = true;
}