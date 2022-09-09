//gridRowSelecting QueryView: QV_3105_20065
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_3105_20065 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
    };