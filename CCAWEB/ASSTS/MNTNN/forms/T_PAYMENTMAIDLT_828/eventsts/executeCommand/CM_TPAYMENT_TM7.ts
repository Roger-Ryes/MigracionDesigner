// (Button) 
    task_executeCommand_CM_TPAYMENT_TM7 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        //executeCommandEventArgs.commons.serverParameters.entityName = true;
    };