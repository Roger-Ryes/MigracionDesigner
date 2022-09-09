// (Button) 
task_executeCommand_CM_TASSTSBI_BA1 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let apiHeader: any = executeCommandEventArgs.commons.api.cobisPatterns.header;
    apiHeader.refreshActions();

    executeCommandEventArgs.commons.execServer = true;
};
