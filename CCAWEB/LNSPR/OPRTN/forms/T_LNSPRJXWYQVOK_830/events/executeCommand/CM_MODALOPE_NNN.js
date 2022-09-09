// (Button) 
task.executeCommand.CM_MODALOPE_NNN = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.navigation.closeModal({
        resultArgs: {
            index: executeCommandEventArgs.commons.api.parentVc.dialogParameters.rowIndex,
            mode: executeCommandEventArgs.commons.api.vc.mode,
            data: entities
        }
    });

};
