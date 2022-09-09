
//gridRowSelecting QueryView: QV_FL15_OEC17
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_FL15_OEC17 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;

};




