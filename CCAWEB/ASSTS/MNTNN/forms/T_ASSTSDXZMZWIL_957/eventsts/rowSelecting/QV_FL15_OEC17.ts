
//gridRowSelecting QueryView: QV_FL15_OEC17
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_FL15_OEC17 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;

};




