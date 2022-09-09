//gridRowSelecting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
};