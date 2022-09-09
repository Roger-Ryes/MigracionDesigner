
//gridRowSelecting QueryView: QV_RT22_BLD64
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_RT22_BLD64 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;

};




