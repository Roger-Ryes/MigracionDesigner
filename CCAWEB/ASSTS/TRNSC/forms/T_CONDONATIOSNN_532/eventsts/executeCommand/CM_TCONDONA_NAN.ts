// (Button) 
    task_executeCommand_CM_TCONDONA_NAN = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.api.navigation.closeModal(true);
    };