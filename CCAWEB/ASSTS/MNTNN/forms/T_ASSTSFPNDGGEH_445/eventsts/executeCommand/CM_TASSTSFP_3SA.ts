// (Button) 
task_executeCommand_CM_TASSTSFP_3SA = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = true;
    executeCommandEventArgs.commons.api.navigation.closeModal({
        resultArgs: {
            index: executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().rowIndex,
            mode: executeCommandEventArgs.commons.api.vc.mode,
            data: entities
        }
    });

};
