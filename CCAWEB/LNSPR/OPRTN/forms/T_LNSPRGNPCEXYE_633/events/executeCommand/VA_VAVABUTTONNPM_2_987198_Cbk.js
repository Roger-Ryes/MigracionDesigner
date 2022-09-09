//Start signature to Callback event to VA_VAVABUTTONNPM_2_987198 - guardar
task.executeCommandCallback.VA_VAVABUTTONNPM_2_987198 = function(entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        if (entities.AmortizationEntity.data()[entities.AmortizationEntity.data().length - 1].balanceCapital != 0) {
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELSALDORE_75001", false, null, timer);
        } else {
            executeCommandCallbackEventArgs.commons.api.viewState.enable('CM_TLNSPRYT_R8O');
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACICA_42329", false, null, timer);
        }
    }

};