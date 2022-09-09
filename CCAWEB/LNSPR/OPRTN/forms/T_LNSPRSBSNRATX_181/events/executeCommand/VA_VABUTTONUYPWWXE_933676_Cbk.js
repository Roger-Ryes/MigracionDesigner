//Start signature to Callback event to VA_VABUTTONUYPWWXE_933676
task.executeCommandCallback.VA_VABUTTONUYPWWXE_933676 = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {

        entities.ProductLineDistribution.product = null;
        entities.ProductLineDistribution.clientCod = null;
        entities.ProductLineDistribution.opTypePas = null;
        entities.ProductLineDistribution.opTypeAc = null;
        entities.ProductLineDistribution.currency = null;
        entities.ProductLineDistribution.amount = null;
        entities.ProductLineDistribution.controlsAmount = false;
        entities.ProductLineDistribution.observations = null;
        entities.ProductLineDistribution.used = 0;
        entities.ProductLineDistribution.available = 0;
        entities.ProductLineDistribution.editionMode = executeCommandCallbackEventArgs.commons.constants.mode.Insert;
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_QF17_TGN52');

        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_PRODUCTWKWZPDFA_211676');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_CLIENTCODHNEWWJ_288676');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_OPTYPEPASINULZZ_450676');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_OPTYPEACPEUXTGS_100676');
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_CURRENCYIMFFWXD_243676');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, timer);
    }
};
