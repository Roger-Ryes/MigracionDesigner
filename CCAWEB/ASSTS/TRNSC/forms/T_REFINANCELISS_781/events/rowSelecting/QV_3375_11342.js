//gridRowSelecting QueryView: QV_3375_11342
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task.gridRowSelecting.QV_3375_11342 = function (entities,gridRowSelectingEventArgs) {
            gridRowSelectingEventArgs.commons.execServer = false;
            entities.RefinanceLoanFilter.operation= gridRowSelectingEventArgs.rowData.loan;
    if (gridRowSelectingEventArgs.commons.api.parentVc)
            gridRowSelectingEventArgs.commons.api.parentVc.uploadGeneralEntities(entities);
            
        };