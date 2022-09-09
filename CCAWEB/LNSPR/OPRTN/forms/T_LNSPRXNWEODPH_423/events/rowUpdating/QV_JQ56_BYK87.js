//gridRowUpdating QueryView: QV_JQ56_BYK87
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_JQ56_BYK87 = function (entities, gridRowUpdatingEventArgs) {

    gridRowUpdatingEventArgs.commons.execServer = false;

    for (var i = 0; i <= entities.OfficialOfficeTransferList.data().length - 1; i++) {
        if (entities.OfficialOfficeTransferList.data()[i].selected) {
            gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TLNSPRXN_W2R');
            break;
        } else {
            gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
        
        }

    }

};
