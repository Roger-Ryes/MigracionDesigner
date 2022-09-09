// (Button) 
task.executeCommand.CM_TLNSPRSC_7TC = function (entities, executeCommandEventArgs) {


    // Validación de porcentaje total
    let porcentajeTotal = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().gridPercentajeTotal;
    // let listBank= executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters().validationAdministrator;

    if (entities.OperationEntity.selectedParticipants) {
        if ((porcentajeTotal + entities.OperationEntity.percentageParticipants) <= 100) {

            return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGUE_94560").then(
                function (response) {
                    switch (response.buttonIndex) {
                        case 0: //cancel
                            executeCommandEventArgs.commons.execServer = false;
                            break;
                        case 1: //accept
                            executeCommandEventArgs.commons.execServer = true;
                            return true;
                            break;
                    }
                }
            );


        } else {
            executeCommandEventArgs.commons.execServer = false;
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, timer);
        }
    } else {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PARTICIIA_96996", false, null, timer);
    }





};
