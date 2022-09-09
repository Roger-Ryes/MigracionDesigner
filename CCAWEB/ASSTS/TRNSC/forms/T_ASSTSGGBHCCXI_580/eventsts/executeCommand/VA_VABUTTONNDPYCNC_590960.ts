


// (Button) 
task_executeCommand_VA_VABUTTONNDPYCNC_590960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
    executeCommandEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
};