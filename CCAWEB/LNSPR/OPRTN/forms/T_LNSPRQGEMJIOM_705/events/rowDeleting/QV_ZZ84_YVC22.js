
//gridRowDeleting QueryView: QV_ZZ84_YVC22
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_ZZ84_YVC22 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.LineGuaranteesAssociatedList = true;

};




