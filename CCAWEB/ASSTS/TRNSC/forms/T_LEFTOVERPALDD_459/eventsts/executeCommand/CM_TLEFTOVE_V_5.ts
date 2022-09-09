// (Button) 
    task_executeCommand_CM_TLEFTOVE_V_5 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let cancelButton: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
    };