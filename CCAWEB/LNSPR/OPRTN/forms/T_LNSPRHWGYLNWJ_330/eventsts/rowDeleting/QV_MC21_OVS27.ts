
//gridRowDeleting QueryView: QV_MC21_OVS27
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_MC21_OVS27 = (
     entities: Model,
     gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.OperationItemsList = true;

};




