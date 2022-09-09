//gridRowDeleting QueryView: QV_1722_99596
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_1722_99596 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = true;
        //gridRowDeletingEventArgs.commons.serverParameters.TypeRates = true;
    };