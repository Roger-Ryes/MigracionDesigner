
//gridRowInserting QueryView: QV_SK42_AAN67
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task.gridRowInserting.QV_SK42_AAN67 = function (entities,gridRowInsertingEventArgs) {

     gridRowInsertingEventArgs.commons.execServer = true;
     //gridRowInsertingEventArgs.commons.serverParameters.OneRankList = true;

};




