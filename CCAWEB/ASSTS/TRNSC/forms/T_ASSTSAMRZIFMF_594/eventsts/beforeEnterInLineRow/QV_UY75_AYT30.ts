//gridBeforeEnterInLineRow QueryView: QV_UY75_AYT30
//Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
task_gridBeforeEnterInLineRow_QV_UY75_AYT30 = (
    entities: Model,
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
