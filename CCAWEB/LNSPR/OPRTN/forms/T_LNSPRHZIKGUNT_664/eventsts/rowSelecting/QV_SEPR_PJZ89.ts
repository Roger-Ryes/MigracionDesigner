//gridRowSelecting QueryView: QV_SEPR_PJZ89
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_SEPR_PJZ89 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

    gridRowSelectingEventArgs.commons.execServer = false;
    gridRowSelectingEventArgs.commons.api.navigation.closeModal({
        response: gridRowSelectingEventArgs.rowData
    });

};
