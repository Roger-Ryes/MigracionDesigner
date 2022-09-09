// (Button) 
task.executeCommand.CM_LOANSEAR_PN2 = function(entities, executeCommandEventArgs) {
    // executeCommandEventArgs.commons.api.viewState.disableValidation('VA_ITEMUMGHQQCSAYX_466423');
    var datos = entities.ReadjustmenMList._data;
    var execServer = true;
    var contar = 0;

    for (let i = 0; i < datos.length; i++) {
        if (datos[i].seleccion) {
            contar++;
        }
    }

    if (contar == 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBESELRS_93935', false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
    }

    return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTSEGUDT_45931").then(
        function (response) {

            switch (response.buttonIndex) {

                case 0: //cancel
    
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1:

                    executeCommandEventArgs.commons.execServer = execServer;
                    return true;
                    break;
    }
        }
    );

};