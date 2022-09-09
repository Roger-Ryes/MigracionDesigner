//gridRowInserting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task.gridRowInserting.QV_ECPR_JAA30 = function (entities, gridRowInsertingEventArgs) {
    gridRowInsertingEventArgs.commons.execServer = false;
    changeAmortization = true;
};