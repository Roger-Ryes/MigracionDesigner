
//gridRowSelecting QueryView: QV_MV07_KFL31
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_MV07_KFL31 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;

};




