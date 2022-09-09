
// (Button) 
task_executeCommand_CM_TLNSPRMF_JP1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;

};