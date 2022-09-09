// (Button) 
task.executeCommand.CM_TASSTSFP_3SA = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.api.navigation.closeModal({
        resultArgs: {
            index: executeCommandEventArgs.commons.api.parentVc.dialogParameters.rowIndex,
            mode: executeCommandEventArgs.commons.api.vc.mode,
            data: entities
        }
    });

};
