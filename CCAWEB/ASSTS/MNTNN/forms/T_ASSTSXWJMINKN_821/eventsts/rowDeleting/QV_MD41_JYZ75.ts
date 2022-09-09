
//gridRowDeleting QueryView: QV_MD41_JYZ75
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_MD41_JYZ75 = (
     entities: Model,
     gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.RateRangeList = true;

};




