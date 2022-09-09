//gridBeforeEnterInLineRow QueryView: QV_7324_98967
        //Evento GridBeforeEnterInLineRow: Se ejecuta antes de la edición o inserción en línea de la grilla.
        task_gridBeforeEnterInLineRow_QV_7324_98967 = (
            entities: Model,
            gridBeforeEnterInLineRowEventArgs: CobisModelGridBeforeEnterInLineRowEventArgs
        ) => {
            gridBeforeEnterInLineRowEventArgs.commons.execServer = false;
            
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'concept');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'observation');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'pastDueAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'currentAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'dueAmount');
    gridBeforeEnterInLineRowEventArgs.commons.api.grid.disabledColumn('QV_7324_98967', 'totalValue');
        };