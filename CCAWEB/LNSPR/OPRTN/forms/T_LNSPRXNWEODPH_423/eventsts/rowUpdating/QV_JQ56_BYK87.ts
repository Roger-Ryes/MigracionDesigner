//gridRowUpdating QueryView: QV_JQ56_BYK87
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_JQ56_BYK87 = (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {

    gridRowUpdatingEventArgs.commons.execServer = false;

    for (let i: any = 0; i <= entities.OfficialOfficeTransferList.length - 1; i++) {
        if (entities.OfficialOfficeTransferList[i].selected) {
            gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TLNSPRXN_W2R');
            break;
        } else {
            gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TLNSPRXN_W2R');
        
        }

    }

};
