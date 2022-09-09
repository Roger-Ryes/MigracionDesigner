// (Button) 
    task_executeCommand_CM_TNEGOTIA_6T_ = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        let cancelButton: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
    };