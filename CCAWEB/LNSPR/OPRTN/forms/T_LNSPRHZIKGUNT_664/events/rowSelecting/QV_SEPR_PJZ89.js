//gridRowSelecting QueryView: QV_SEPR_PJZ89
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_SEPR_PJZ89 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    gridRowSelectingEventArgs.commons.api.navigation.closeModal({
        response: gridRowSelectingEventArgs.rowData
    });

};
