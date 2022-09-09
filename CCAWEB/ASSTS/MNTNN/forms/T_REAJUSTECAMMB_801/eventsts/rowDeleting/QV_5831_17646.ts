//gridRowDeleting QueryView: QV_5831_17646
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_5831_17646 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = true;
        //gridRowDeletingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;
    };