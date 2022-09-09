// (Button) 
task_executeCommand_CM_TASSTSEG_J5_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;

    executeCommandEventArgs.commons.api.navigation.closeModal({
        response: false
    });
};
