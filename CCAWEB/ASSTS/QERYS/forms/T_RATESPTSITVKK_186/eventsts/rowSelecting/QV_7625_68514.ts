//gridRowSelecting QueryView: QV_7625_68514
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_7625_68514 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
    };