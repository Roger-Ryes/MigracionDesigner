//gridRowDeleting QueryView: QV_5693_54772
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_5693_54772 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowDeletingEventArgs.commons.execServer = true;
        //gridRowDeletingEventArgs.commons.serverParameters.Rates = true;
    };