//Start signature to Callback event to CM_PROJECTO_N34
    task.executeCommandCallback.CM_PROJECTO_N34 = function(entities, executeCommandCallbackEventArgs) {
        if (executeCommandCallbackEventArgs.success) {
        if (entities.MassiveCommissionsMistakes != null && entities.MassiveCommissionsMistakes.length > 1) {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ALGUNASEN_20984", false, null, timer);
        } else {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false,null,timer);
        }
        executeCommandCallbackEventArgs.commons.api.navigation.closeModal({
            objLoans: entities.LoanList,
            objMistakes: entities.MassiveCommissionsMistakes
        });
    } 

        
        
    };