
//gridRowInserting QueryView: QV_TJ88_MTX55
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task_gridRowInserting_QV_TJ88_MTX55 = (
     entities: Model,
     gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.TwoRangesList = true;

};




