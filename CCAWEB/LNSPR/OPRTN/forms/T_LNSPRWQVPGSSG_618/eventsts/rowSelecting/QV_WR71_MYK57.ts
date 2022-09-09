
//gridRowSelecting QueryView: QV_WR71_MYK57
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_WR71_MYK57 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;

};




