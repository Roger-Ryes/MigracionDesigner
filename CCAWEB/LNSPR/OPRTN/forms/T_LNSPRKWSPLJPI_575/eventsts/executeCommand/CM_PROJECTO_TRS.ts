// (Button) 
    task_executeCommand_CM_PROJECTO_TRS = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
    };