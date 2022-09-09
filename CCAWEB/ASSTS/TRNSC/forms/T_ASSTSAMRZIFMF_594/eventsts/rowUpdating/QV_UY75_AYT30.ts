//gridRowUpdating QueryView: QV_UY75_AYT30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_UY75_AYT30 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {
    let server: any = false;

    //Debe elegir reest si es opFinal

    for (let i: any = 0; i < entities.RestructuringList.length; i++) {
        if (entities.RestructuringList.data()[i].finalOp && entities.RestructuringList[i].reest) {
            server = true;
            break;
        } else if (entities.RestructuringList.data()[i].finalOp && !entities.RestructuringList[i].reest) {
            gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SELECCIEP_11167', false, null, this.ASSTS.timer);
            server = true;
                break;
            }
        }

    //Debe eliegir obligatoriamente Capitaliza para una operacion a reest si no es opFinal
    for (let i: any = 0; i < entities.RestructuringList.length; i++) {
    if (!entities.RestructuringList.data()[i].finalOp && entities.RestructuringList.data()[i].reest && !entities.RestructuringList[i].capitalize) {
        //server = true;
                gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJATIID_57994', false, null, this.ASSTS.timer);
        break;
    }

}

    //SI NO REEST LIMPIAR CAPITALIZE
    if (!gridRowUpdatingEventArgs.rowData.reest && gridRowUpdatingEventArgs.rowData.capitalize) {
        gridRowUpdatingEventArgs.rowData.capitalize = null;
        gridRowUpdatingEventArgs.rowData.totalCap = 0.00;
        gridRowUpdatingEventArgs.rowData.toPay = 0.00;

        }

    //Solo puede existir una opFinal
    if (onlyOne > 1) {
        server = false;
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJASOPL_42627', false, null, this.ASSTS.timer);
    }

    //SI NO HAY OP.FINAL NO SE CALCULA EL TOTAL
    if (onlyOne <= 0) {
        entities.RestructuringSummary.opCurrency = 0.00;
        entities.RestructuringSummary.localCurrency = 0.00;
        entities.RestructuringSummary.amountPay = 0.00;
            }

    if (server) {
        gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TASSTSAM_SAA');
    } else {
gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TASSTSAM_SAA');
}


    gridRowUpdatingEventArgs.commons.serverParameters.GeneralParameters = true;
    gridRowUpdatingEventArgs.commons.serverParameters.RestructuringList = true;
    gridRowUpdatingEventArgs.commons.serverParameters.RestructuringSummary = true;

    gridRowUpdatingEventArgs.commons.execServer = server;
};
