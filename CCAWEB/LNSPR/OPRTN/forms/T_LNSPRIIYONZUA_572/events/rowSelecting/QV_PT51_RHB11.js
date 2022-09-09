
//gridRowSelecting QueryView: QV_PT51_RHB11
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_PT51_RHB11 = function (entities,gridRowSelectingEventArgs) {
     gridRowSelectingEventArgs.commons.execServer = false;
};




