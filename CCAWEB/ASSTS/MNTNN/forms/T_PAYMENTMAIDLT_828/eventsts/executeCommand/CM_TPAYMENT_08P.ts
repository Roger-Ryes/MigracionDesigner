// (Button) 
    task_executeCommand_CM_TPAYMENT_08P = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let cancelButton: any = false;
        executeCommandEventArgs.commons.api.navigation.closeModal(cancelButton);
    };