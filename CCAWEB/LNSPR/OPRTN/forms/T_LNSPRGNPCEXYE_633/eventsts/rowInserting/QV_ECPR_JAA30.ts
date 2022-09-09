//gridRowInserting QueryView: QV_ECPR_JAA30
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task_gridRowInserting_QV_ECPR_JAA30 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
) => {
    gridRowInsertingEventArgs.commons.execServer = false;
    changeAmortization = true;
};