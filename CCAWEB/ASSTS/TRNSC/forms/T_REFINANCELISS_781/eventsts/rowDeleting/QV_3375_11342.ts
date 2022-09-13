//gridRowDeleting QueryView: QV_3375_11342
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_3375_11342 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = false;
        if (!entities.RefinanceLoanFilter.refreshData) {
            entities.RefinanceLoanFilter.refreshData = true;
        } else {
            entities.RefinanceLoanFilter.refreshData = false;
        }
    };