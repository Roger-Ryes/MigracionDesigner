//gridRowUpdating QueryView: QV_3375_11342
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
//designer-hint: 2304: Cannot find name 'task_gridRowUpdating_QV_3375_11342'.
task_gridRowUpdating_QV_3375_11342 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionEventArgs'.
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {
    let op: any = false;
    for (let i: any = 0; i < entities.RefinanceLoans.length; i++) {
        if (entities.RefinanceLoans[i].selected) {
            op = true;
            break;
        }
    }
    //VALIDA QUE EXISTA POR LO MENOS UNA OPERACION
    if (!op) {
        gridRowUpdatingEventArgs.commons.api.viewState.disable('CM_TREFINAN_9NC');
    } else {
        gridRowUpdatingEventArgs.commons.api.viewState.enable('CM_TREFINAN_9NC');
    }

    gridRowUpdatingEventArgs.commons.execServer = true;
    //gridRowUpdatingEventArgs.commons.serverParameters.RefinanceLoans = true;
};
