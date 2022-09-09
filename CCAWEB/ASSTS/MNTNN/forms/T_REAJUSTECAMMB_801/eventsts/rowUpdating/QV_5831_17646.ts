//gridRowUpdating QueryView: QV_5831_17646
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowUpdating_QV_5831_17646 = (
        entities: Model,
        gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
    ) => {
        gridRowUpdatingEventArgs.commons.execServer = true;
        //gridRowUpdatingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;
    };