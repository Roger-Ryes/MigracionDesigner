//gridRowSelecting QueryView: QV_3009_87098
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_3009_87098 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = true;
        //gridRowSelectingEventArgs.commons.serverParameters.Loan = true;
    };