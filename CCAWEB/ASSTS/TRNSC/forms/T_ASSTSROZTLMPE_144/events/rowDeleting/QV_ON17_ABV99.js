
//gridRowDeleting QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_ON17_ABV99 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.CompaniesList = true;

};




