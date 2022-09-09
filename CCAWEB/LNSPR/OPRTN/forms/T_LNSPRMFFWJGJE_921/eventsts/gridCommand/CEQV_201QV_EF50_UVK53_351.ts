//gridCommand (Button) QueryView: QV_EF50_UVK53
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task_gridCommand_CEQV_201QV_EF50_UVK53_351 = (
        entities: Model,
        gridExecuteCommandEventArgs: CobisModelGridCommandExecuteEventArgs
    ) => {
        let nav: any = gridExecuteCommandEventArgs.commons.api.navigation;
        let auxCont: any = 0;

        for (let i: any = 0; i < entities.LoanList.length; i++) {
            if (entities.LoanList[i].seleccion) {
                auxCont = auxCont + 1;
            }
        }

        if (auxCont > 0) {
        } else {
            gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false,null,timer);
        }

        gridExecuteCommandEventArgs.commons.execServer = false;
    };