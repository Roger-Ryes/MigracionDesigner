//gridRowSelecting QueryView: QV_5973_48889
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_5973_48889 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
        //gridRowSelectingEventArgs.commons.serverParameters.DetailPaymentForm = true;
    };