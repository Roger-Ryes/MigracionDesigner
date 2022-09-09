// (Button) 
    task_executeCommand_CM_TPRIORIT_I8N = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let cancelPriority: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(cancelPriority);
    };