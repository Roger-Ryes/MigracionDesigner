


// (Button) 
task_executeCommand_VA_VABUTTONFPXLAAR_334960 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    this.clearForm(entities, 1)
    this.enableMyCommand(entities, executeCommandEventArgs.commons.api.viewState)
    executeCommandEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
    executeCommandEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
};