
//gridRowInserting QueryView: QV_MC21_OVS27
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task_gridRowInserting_QV_MC21_OVS27 = (
     entities: Model,
     gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.OperationItemsList = true;

};




