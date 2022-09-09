
//gridRowDeleting QueryView: QV_PJ68_WJJ41
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_PJ68_WJJ41 = (
    entities: Model,
    gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {
    
    gridRowDeletingEventArgs.commons.execServer = true;
    //gridRowDeletingEventArgs.commons.serverParameters.NoAppliedPayment = true; 
};




