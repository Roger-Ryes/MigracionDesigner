//gridRowInserting QueryView: QV_MD41_JYZ75
//Se ejecuta antes de que los datos insertados en una grilla sean comprometidos.
task_gridRowInserting_QV_MD41_JYZ75 = (
    entities: Model,
    gridRowInsertingEventArgs: CobisModelGridRowActionEventArgs
) => {


    gridRowInsertingEventArgs.rowData.dataType2 = !gridRowInsertingEventArgs.rowData.dataType2 ? null : gridRowInsertingEventArgs.rowData.dataType2;
    
    gridRowInsertingEventArgs.rowData.title2 = !gridRowInsertingEventArgs.rowData.title2 ? null : gridRowInsertingEventArgs.rowData.title2;
    
    if (gridRowInsertingEventArgs.rowData.rank == 2) {
        if (!gridRowInsertingEventArgs.rowData.title2 || !gridRowInsertingEventArgs.rowData.dataType2) {

            gridRowInsertingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_COLUMNA2I_43952', false, null, timer);
            gridRowInsertingEventArgs.commons.execServer = false;
            gridRowInsertingEventArgs.cancel = true;
        } else {
            gridRowInsertingEventArgs.commons.execServer = true;
        }
    } else {
        gridRowInsertingEventArgs.commons.execServer = true;
    }

    //gridRowInsertingEventArgs.commons.serverParameters.RateRangeList = true;

};
