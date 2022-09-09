//gridRowSelecting QueryView: QV_5693_54772
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_5693_54772 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;
       // gridRowSelectingEventArgs.commons.serverParameters.Rates = true;
    };