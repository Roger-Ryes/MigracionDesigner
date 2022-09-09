// (Button) 
    task_executeCommand_CM_TPAYMENT_TEC = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let isCancel: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(isCancel);
    };