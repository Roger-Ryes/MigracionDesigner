//gridRowSelecting QueryView: QV_5973_48889
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task.gridRowSelecting.QV_5973_48889 = function (entities, gridRowSelectingEventArgs) {
        gridRowSelectingEventArgs.commons.execServer = false;
        
        //gridRowSelectingEventArgs.commons.serverParameters.DetailPaymentForm = true;
    };