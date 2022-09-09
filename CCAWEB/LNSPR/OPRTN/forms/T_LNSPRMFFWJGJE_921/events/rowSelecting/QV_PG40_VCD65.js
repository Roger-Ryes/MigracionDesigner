
//gridRowSelecting QueryView: QV_PG40_VCD65
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_PG40_VCD65 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;

};




