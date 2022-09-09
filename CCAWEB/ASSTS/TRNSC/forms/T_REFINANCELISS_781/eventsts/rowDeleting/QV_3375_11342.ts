//gridRowDeleting QueryView: QV_3375_11342
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    //designer-hint: 2304: Cannot find name 'task_gridRowDeleting_QV_3375_11342'.
    task_gridRowDeleting_QV_3375_11342 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelGridRowActionEventArgs'.
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = false;
        if (!entities.RefinanceLoanFilter.refreshData) {
            entities.RefinanceLoanFilter.refreshData = true;
        } else {
            entities.RefinanceLoanFilter.refreshData = false;
        }
    };