// (Button) 
task_executeCommand_CM_MODALOPE_NNN = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    executeCommandEventArgs.commons.api.navigation.closeModal({
        resultArgs: {
            index: executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().rowIndex,
            mode: executeCommandEventArgs.commons.api.vc.mode,
            data: entities
        }
    });

};
