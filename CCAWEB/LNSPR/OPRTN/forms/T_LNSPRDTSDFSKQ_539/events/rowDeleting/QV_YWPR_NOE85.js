
//gridRowDeleting QueryView: QV_YWPR_NOE85
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_YWPR_NOE85 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = false;

};




