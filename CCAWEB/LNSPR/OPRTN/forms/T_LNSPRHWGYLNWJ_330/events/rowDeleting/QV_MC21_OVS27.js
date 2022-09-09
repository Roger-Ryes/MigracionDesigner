
//gridRowDeleting QueryView: QV_MC21_OVS27
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_MC21_OVS27 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.OperationItemsList = true;

};




