// (Button) 
    task_executeCommand_CM_TLEFTOVE__3S = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.api.navigation.closeModal(entities.LeftOverPayment);
    };