//gridRowDeleting QueryView: QV_7546_25470
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_7546_25470 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = true;
        //gridRowDeletingEventArgs.commons.serverParameters.MethodsRetention = true;
    };