//gridRowSelecting QueryView: QV_3375_11342
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        //designer-hint: 2304: Cannot find name 'task_gridRowSelecting_QV_3375_11342'.
        task_gridRowSelecting_QV_3375_11342 = (
                //designer-hint: 2304: Cannot find name 'Model'.
                entities: Model,
                //designer-hint: 2304: Cannot find name 'CobisModelGridRowSelectingEventArgs'.
                gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
        ) => {
            gridRowSelectingEventArgs.commons.execServer = false;
            entities.RefinanceLoanFilter.operation= gridRowSelectingEventArgs.rowData.loan;
    if (gridRowSelectingEventArgs.commons.api.parentVc)
            gridRowSelectingEventArgs.commons.api.parentVc?.uploadGeneralEntities(entities);
            
        };