
//gridRowDeleting QueryView: QV_MD41_JYZ75
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_MD41_JYZ75 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.RateRangeList = true;

};




