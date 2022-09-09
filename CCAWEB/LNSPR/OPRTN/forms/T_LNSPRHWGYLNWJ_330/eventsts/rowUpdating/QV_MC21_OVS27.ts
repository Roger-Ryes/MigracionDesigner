
//gridRowUpdating QueryView: QV_MC21_OVS27
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_MC21_OVS27 = (
     entities: Model,
     gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowUpdatingEventArgs.commons.execServer = true;
     //gridRowUpdatingEventArgs.commons.serverParameters.OperationItemsList = true;

};




