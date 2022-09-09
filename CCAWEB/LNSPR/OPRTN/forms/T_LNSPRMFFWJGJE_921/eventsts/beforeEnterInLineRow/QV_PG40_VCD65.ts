//gridBeforeEnterInLineRow QueryView: QV_PG40_VCD65
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task_gridBeforeEnterInLineRow_QV_PG40_VCD65 = (
    entities: Model,
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
) => {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
};