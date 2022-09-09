//gridBeforeEnterInLineRow QueryView: QV_MD41_JYZ75
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task.gridBeforeEnterInLineRow.QV_MD41_JYZ75 = function (entities, gridBeforeEnterInLineRowEventArgs) {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;

    if (gridBeforeEnterInLineRowEventArgs.inlineWorkMode == 0) { //INSERT
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'rank');
    } else { //UPDATE
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'rank');

        if (gridBeforeEnterInLineRowEventArgs.rowData.rank == 1) {
            gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'title2');
        gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'dataType2');
        } else {
            gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'title2');
            gridBeforeEnterInLineRowEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'dataType2');
        }
    }

};
