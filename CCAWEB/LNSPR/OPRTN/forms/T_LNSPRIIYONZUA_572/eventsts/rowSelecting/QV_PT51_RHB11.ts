
//gridRowSelecting QueryView: QV_PT51_RHB11
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_PT51_RHB11 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
     gridRowSelectingEventArgs.commons.execServer = false;
};




