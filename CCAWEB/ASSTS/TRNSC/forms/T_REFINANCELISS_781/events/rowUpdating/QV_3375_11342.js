//gridRowUpdating QueryView: QV_3375_11342
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_3375_11342 = function (entities,gridRowUpdatingEventArgs) {

    var op = false;
    for (var i = 0; i < entities.RefinanceLoans.data().length; i++) {
        if (entities.RefinanceLoans.data()[i].selected) {
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
