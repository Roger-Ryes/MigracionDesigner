
//gridRowDeleting QueryView: QV_YWPR_NOE85
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_YWPR_NOE85 = (
     entities: Model,
     gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowDeletingEventArgs.commons.execServer = false;

};




