// (Button) 
task_executeCommand_CM_TLNSPRII_6S6 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
};