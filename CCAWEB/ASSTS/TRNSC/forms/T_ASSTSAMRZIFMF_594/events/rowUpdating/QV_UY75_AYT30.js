//gridRowUpdating QueryView: QV_UY75_AYT30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_UY75_AYT30 = function (entities, gridRowUpdatingEventArgs) {

    var server = false;
 
        //Debe elegir reest si es opFinal
    for (var i = 0; i < entities.RestructuringList.data().length; i++) {
        if (entities.RestructuringList.data()[i].finalOp && entities.RestructuringList.data()[i].reest) {
            server = true;
            break;
        } else if (entities.RestructuringList.data()[i].finalOp && !entities.RestructuringList.data()[i].reest) {
            gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_SELECCIEP_11167', false, null, timer);
            server = true;
                break;
            }
        }

        //Debe eliegir obligatoriamente Capitaliza para una operacion a reest si no es opFinal
        for (var i = 0; i < entities.RestructuringList.data().length; i++) {
        if (!entities.RestructuringList.data()[i].finalOp && entities.RestructuringList.data()[i].reest && !entities.RestructuringList.data()[i].capitalize) {
            //server = true;
                    gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJATIID_57994', false, null, timer);
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
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIJASOPL_42627', false, null, timer);
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
