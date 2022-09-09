//gridBeforeEnterInLineRow QueryView: QV_TJ88_MTX55
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task.gridBeforeEnterInLineRow.QV_TJ88_MTX55 = function (entities, gridBeforeEnterInLineRowEventArgs) {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_TJ88_MTX55', 'sequential');


    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.updateRowData(gridBeforeEnterInLineRowEventArgs.rowData, 'date', null);
    }

    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_TJ88_MTX55', 'date');

};
