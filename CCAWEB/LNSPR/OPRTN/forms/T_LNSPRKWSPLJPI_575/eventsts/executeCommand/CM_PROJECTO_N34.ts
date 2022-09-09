// (Button) 
    task_executeCommand_CM_PROJECTO_N34 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        let auxData: any = [];
        let execServer: any = true;
        executeCommandEventArgs.commons.api.parentVc?.model.LoanList.data().forEach((itemData: any) => {
            if (itemData.seleccion) {
                auxData.push(itemData);
            }
        })

        entities.LoanList = auxData;
        executeCommandEventArgs.commons.execServer = execServer;
    };