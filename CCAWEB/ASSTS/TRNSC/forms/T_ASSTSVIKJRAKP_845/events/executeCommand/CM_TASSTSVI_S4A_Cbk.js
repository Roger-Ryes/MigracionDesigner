
//Start signature to Callback event to CM_TASSTSVI_S4A
task.executeCommandCallback.CM_TASSTSVI_S4A = function(entities, executeCommandCallbackEventArgs) {
    var api = executeCommandCallbackEventArgs.commons.api;
    var mode = executeCommandCallbackEventArgs.commons.constants.mode;

    if (executeCommandCallbackEventArgs.success) {
        api.viewState.disable('CM_TASSTSVI_S4A')
        api.viewState.disable('G_COMPANYCTE_467399')
        api.viewState.disable('G_COMPANYTCT_526399')
        api.viewState.disable('G_COMPANYECE_756399')
        api.viewState.disable('G_COMPANYAEE_130399')
        api.viewState.disable('G_COMPANYECE_272399')
        api.viewState.disable('G_COMPANYRTT_593399')
        api.grid.refresh('QV_ON17_ABV99');
        if(api.vc.mode == mode.Insert){
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAO_10733', false, null, timer);
        }else if(api.vc.mode == mode.Update){
            executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_REGISTRAO_10733', false, null, timer);
        }
    }
};
