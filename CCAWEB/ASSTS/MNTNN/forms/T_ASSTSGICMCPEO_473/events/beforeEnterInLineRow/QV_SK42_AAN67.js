//gridBeforeEnterInLineRow QueryView: QV_SK42_AAN67
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task.gridBeforeEnterInLineRow.QV_SK42_AAN67 = function (entities, gridBeforeEnterInLineRowEventArgs) {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_SK42_AAN67', 'sequential');


    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.updateRowData(gridBeforeEnterInLineRowEventArgs.rowData, 'date', null);
    }

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_SK42_AAN67', 'date');
};
