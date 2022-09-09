//gridRowSelecting QueryView: QV_QF17_TGN52
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_QF17_TGN52 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;

    if (gridRowSelectingEventArgs.commons.api.vc.mode == gridRowSelectingEventArgs.commons.constants.mode.Update) {
        entities.ProductLineDistribution.editionMode = gridRowSelectingEventArgs.commons.constants.mode.Update;
        gridRowSelectingEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_EDICINHAI_74003', false, null, timer);
        entities.ProductLineDistribution.product = gridRowSelectingEventArgs.rowData.product;
        entities.ProductLineDistribution.clientCode = gridRowSelectingEventArgs.rowData.clientCod;

        entities.ProductLineDistribution.currency = gridRowSelectingEventArgs.rowData.codCurrency;
        entities.ProductLineDistribution.amount = gridRowSelectingEventArgs.rowData.amount;
        entities.ProductLineDistribution.controlsAmount = gridRowSelectingEventArgs.rowData.controlsAmount == 'S' ? true : false;
        entities.ProductLineDistribution.observations = gridRowSelectingEventArgs.rowData.observations;
        entities.ProductLineDistribution.used = gridRowSelectingEventArgs.rowData.used;
        entities.ProductLineDistribution.available = gridRowSelectingEventArgs.rowData.available;
        entities.ProductLineDistribution.clientCod = gridRowSelectingEventArgs.rowData.clientCod;

        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_PRODUCTWKWZPDFA_211676');
        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_CLIENTCODHNEWWJ_288676');
        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_OPTYPEPASINULZZ_450676');
        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_OPTYPEACPEUXTGS_100676');
        gridRowSelectingEventArgs.commons.api.viewState.disable('VA_CURRENCYIMFFWXD_243676');
    }

};
