
//gridRowSelecting QueryView: QV_PY15_EUR25
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_PY15_EUR25 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;

};




