
//gridRowDeleting QueryView: QV_WX74_OJZ40
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task.gridRowDeleting.QV_WX74_OJZ40 = function (entities,gridRowDeletingEventArgs) {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.PaymentAutomaticList = true;

};




