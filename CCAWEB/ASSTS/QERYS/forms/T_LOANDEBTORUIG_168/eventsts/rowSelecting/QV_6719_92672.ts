//gridRowSelecting QueryView: QV_6719_92672
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_6719_92672 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
        
    };