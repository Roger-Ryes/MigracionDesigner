// (Button) 
    task_executeCommand_CM_TTYPERAT_MET = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let cancelButton: any = false;
        executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
    };