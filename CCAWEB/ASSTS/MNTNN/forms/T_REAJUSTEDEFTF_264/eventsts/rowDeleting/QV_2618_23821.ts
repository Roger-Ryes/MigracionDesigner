
//gridRowDeleting QueryView: QV_2618_23821
    //Se ejecuta antes de que los datos eliminados en una grilla sean comprometidos.
    task_gridRowDeleting_QV_2618_23821 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionEventArgs
    ) => {

        gridRowDeletingEventArgs.commons.execServer = true;
     //gridRowDeletingEventArgs.commons.serverParameters.ReadjustmentDetalilsLoan = true;
        
    };




