//gridRowSelecting QueryView: QV_1949_60600
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_1949_60600 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
    };