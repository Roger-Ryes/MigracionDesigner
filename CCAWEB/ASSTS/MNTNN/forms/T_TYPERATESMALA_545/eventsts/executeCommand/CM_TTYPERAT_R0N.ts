// (Button) 
    task_executeCommand_CM_TTYPERAT_R0N = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        //executeCommandEventArgs.commons.serverParameters.entityName = true;
    };