// (Button) 
//designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSBI_BA1'.
task_executeCommand_CM_TASSTSBI_BA1 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let apiHeader: any = executeCommandEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    executeCommandEventArgs.commons.execServer = true;
};
