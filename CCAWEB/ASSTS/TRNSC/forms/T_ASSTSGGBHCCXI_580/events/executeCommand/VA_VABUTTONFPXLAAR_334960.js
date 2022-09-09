


// (Button) 
task.executeCommand.VA_VABUTTONFPXLAAR_334960 = function(  entities, executeCommandEventArgs ) {
    executeCommandEventArgs.commons.execServer = false;
    clearForm(entities,1)
    enableMyCommand(entities,executeCommandEventArgs.commons.api.viewState)
    executeCommandEventArgs.commons.api.grid.refresh('QV_CK98_MLY42')
    executeCommandEventArgs.commons.api.grid.refresh('QV_NO93_ONZ78')
};