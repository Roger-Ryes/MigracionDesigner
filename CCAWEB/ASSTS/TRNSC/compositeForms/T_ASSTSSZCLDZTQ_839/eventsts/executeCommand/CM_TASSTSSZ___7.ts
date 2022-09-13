// (Button) 
    //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSSZ___7'.
    task_executeCommand_CM_TASSTSSZ___7 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        //designer-hint: 6133: 'entities' is declared but its value is never read.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
    };