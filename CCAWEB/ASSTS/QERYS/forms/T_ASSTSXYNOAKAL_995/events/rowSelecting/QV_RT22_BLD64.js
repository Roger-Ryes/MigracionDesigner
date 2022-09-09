
//gridRowSelecting QueryView: QV_RT22_BLD64
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_RT22_BLD64 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;

};




