
//gridRowSelecting QueryView: QV_QG32_ZBS32
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_QG32_ZBS32 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;

};




