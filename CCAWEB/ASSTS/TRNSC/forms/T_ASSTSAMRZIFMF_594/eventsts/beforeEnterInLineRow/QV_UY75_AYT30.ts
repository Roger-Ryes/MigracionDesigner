//gridBeforeEnterInLineRow QueryView: QV_UY75_AYT30
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
//designer-hint: 2304: Cannot find name 'task_gridBeforeEnterInLineRow_QV_UY75_AYT30'.
task_gridBeforeEnterInLineRow_QV_UY75_AYT30 = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelGridBeforeEnterInLineRowEventArgs'.
    gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
) => {

    gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'bank');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'typeLoan');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'currency');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'capitalBalance');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'interestBalance');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'otherItems');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'totalCap');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'residualTerm');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'state');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'overduesFees');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_UY75_AYT30', 'toPay');

};
