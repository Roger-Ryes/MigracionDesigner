//gridRowSelecting QueryView: QV_QV37_LCP47
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task_gridRowSelecting_QV_QV37_LCP47 = (
            entities: Model,
            gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
        ) => {
            gridRowSelectingEventArgs.commons.execServer = false;
            
        };