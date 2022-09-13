//gridRowSelecting QueryView: QV_5973_48889
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    //designer-hint: 2304: Cannot find name 'task_gridRowSelecting_QV_5973_48889'.
    task_gridRowSelecting_QV_5973_48889 = (
        //designer-hint: 2304: Cannot find name 'Model'.
        //designer-hint: 6133: 'entities' is declared but its value is never read.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelGridRowSelectingEventArgs'.
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
        //gridRowSelectingEventArgs.commons.serverParameters.DetailPaymentForm = true;
    };