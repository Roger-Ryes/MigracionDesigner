//gridRowSelecting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_ECPR_JAA30 = function (entities, gridRowSelectingEventArgs) {
    gridRowSelectingEventArgs.commons.execServer = false;
};