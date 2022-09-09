
//gridRowSelecting QueryView: QV_WX74_OJZ40
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_WX74_OJZ40 = function (entities,gridRowSelectingEventArgs) {
     gridRowSelectingEventArgs.commons.args.mode = gridRowSelectingEventArgs.commons.constants.mode.Update
     gridRowSelectingEventArgs.commons.execServer = true;
};




