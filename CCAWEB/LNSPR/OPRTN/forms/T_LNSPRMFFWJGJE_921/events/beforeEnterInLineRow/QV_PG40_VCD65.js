//gridBeforeEnterInLineRow QueryView: QV_PG40_VCD65
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task.gridBeforeEnterInLineRow.QV_PG40_VCD65 = function (entities,gridBeforeEnterInLineRowEventArgs) {
    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
};