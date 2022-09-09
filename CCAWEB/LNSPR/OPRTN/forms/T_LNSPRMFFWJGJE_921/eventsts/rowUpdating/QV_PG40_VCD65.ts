//gridRowUpdating QueryView: QV_PG40_VCD65
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task_gridRowUpdating_QV_PG40_VCD65 = (
            entities: Model,
            gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
        ) => {
            gridRowUpdatingEventArgs.commons.execServer = false;
            
        };