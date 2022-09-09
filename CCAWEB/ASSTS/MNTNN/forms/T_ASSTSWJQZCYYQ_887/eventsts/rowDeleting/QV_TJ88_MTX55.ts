
//gridRowDeleting QueryView: QV_TJ88_MTX55
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_TJ88_MTX55 = (
     entities: Model,
     gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.TwoRangesList = true;

};




