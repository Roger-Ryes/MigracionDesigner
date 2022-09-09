
//gridRowUpdating QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_ON17_ABV99 = (
     entities: Model,
     gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {

     gridRowUpdatingEventArgs.commons.execServer = false;
     
};




