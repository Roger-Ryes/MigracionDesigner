// (Button) 
    task_executeCommand_CM_TTESTWKH_T57 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let api: any = executeCommandEventArgs.commons.api;
        let response: any = { };
        api.vc.closeModal(response);
    };