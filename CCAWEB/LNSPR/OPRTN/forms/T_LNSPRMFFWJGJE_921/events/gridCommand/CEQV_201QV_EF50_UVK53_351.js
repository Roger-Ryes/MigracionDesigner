//gridCommand (Button) QueryView: QV_EF50_UVK53
    //Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
    task.gridCommand.CEQV_201QV_EF50_UVK53_351 = function (entities, gridExecuteCommandEventArgs) {
        var nav = gridExecuteCommandEventArgs.commons.api.navigation;
        
        var auxCont = 0;
        
        for (var i = 0; i < entities.LoanList.data().length; i++) {
            if (entities.LoanList.data()[i].seleccion) {
                auxCont = auxCont + 1;
            }
        }
        
        if (auxCont > 0) {
        } else {
            gridExecuteCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false,null,timer);
        }
        
        gridExecuteCommandEventArgs.commons.execServer = false;
    };