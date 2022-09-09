// (Button) 
    task_executeCommand_CM_TNEGOTIA_2A4 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        
        executeCommandEventArgs.commons.api.navigation.closeModal(entities.Negotiation);
        
    };