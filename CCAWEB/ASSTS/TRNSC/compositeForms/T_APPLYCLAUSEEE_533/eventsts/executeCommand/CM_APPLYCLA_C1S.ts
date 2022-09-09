// (Button) 
    task_executeCommand_CM_APPLYCLA_C1S = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        //executeCommandEventArgs.commons.serverParameters.entityName = true;
    };