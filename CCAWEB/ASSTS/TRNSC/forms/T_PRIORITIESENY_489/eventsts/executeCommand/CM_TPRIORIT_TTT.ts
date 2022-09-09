// (Button) 
    task_executeCommand_CM_TPRIORIT_TTT = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;

        let dataGrid: any = {
            data: entities.Priorities
            };

        executeCommandEventArgs.commons.api.navigation.closeModal(dataGrid);
    };