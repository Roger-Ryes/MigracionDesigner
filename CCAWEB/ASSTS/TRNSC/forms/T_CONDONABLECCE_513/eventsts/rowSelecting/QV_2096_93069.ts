//gridRowSelecting QueryView: QV_2096_93069
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_2096_93069 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = true;
        //gridRowSelectingEventArgs.commons.serverParameters.CondonableConcepts = true;
    };