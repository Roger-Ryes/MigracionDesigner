
//gridRowSelecting QueryView: QV_ZY19_NNJ12
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_ZY19_NNJ12 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;

};




