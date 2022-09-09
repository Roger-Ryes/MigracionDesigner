//gridRowUpdating QueryView: QV_2618_23821
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowUpdating_QV_2618_23821 = (
        entities: Model,
        gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
    ) => {

    if (!gridRowUpdatingEventArgs.rowData.porcentaje && !gridRowUpdatingEventArgs.rowData.factor && !gridRowUpdatingEventArgs.rowData.signo && !gridRowUpdatingEventArgs.rowData.referencial) {
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_SEDEBEIAF_79454', false, null, timer);
        gridRowUpdatingEventArgs.cancel = true;
        gridRowUpdatingEventArgs.commons.execServer = false;

    } else if (!gridRowUpdatingEventArgs.rowData.porcentaje && (!gridRowUpdatingEventArgs.rowData.factor || !gridRowUpdatingEventArgs.rowData.signo || !gridRowUpdatingEventArgs.rowData.referencial)) {
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_PARAINGLE_54663', false, null, timer);
        gridRowUpdatingEventArgs.cancel = true;
        gridRowUpdatingEventArgs.commons.execServer = false;
    } else if (gridRowUpdatingEventArgs.rowData.porcentaje && gridRowUpdatingEventArgs.rowData.porcentaje <= 0) {
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.LBL_ASSTS_SISEINGAE_33960', false, null, timer);
        gridRowUpdatingEventArgs.cancel = true;
        gridRowUpdatingEventArgs.commons.execServer = false;
    } else {
        gridRowUpdatingEventArgs.commons.execServer = true;
    }


    //gridRowUpdatingEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;

};
