
//gridRowInserting QueryView: QV_SK42_AAN67
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task_gridRowInserting_QV_SK42_AAN67 = (
     entities: Model,
     gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.OneRankList = true;

};




