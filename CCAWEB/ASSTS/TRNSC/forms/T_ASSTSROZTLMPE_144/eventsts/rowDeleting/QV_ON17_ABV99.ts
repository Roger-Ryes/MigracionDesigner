
//gridRowDeleting QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
task_gridRowDeleting_QV_ON17_ABV99 = (
     entities: Model,
     gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.CompaniesList = true;

};




