
//gridRowUpdating QueryView: QV_7324_98967
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_7324_98967 = (
     entities: Model,
     gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowUpdatingEventArgs.commons.execServer = false;

};




