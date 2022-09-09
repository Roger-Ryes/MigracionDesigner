//gridRowUpdating QueryView: QV_MD41_JYZ75
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_MD41_JYZ75 = function (entities, gridRowUpdatingEventArgs) {


    //gridRowUpdatingEventArgs.commons.serverParameters.RateRangeList = true;
    gridRowUpdatingEventArgs.rowData.dataType2 = !gridRowUpdatingEventArgs.rowData.dataType2 ? null : gridRowUpdatingEventArgs.rowData.dataType2;

    gridRowUpdatingEventArgs.rowData.title2 = !gridRowUpdatingEventArgs.rowData.title2 ? null : gridRowUpdatingEventArgs.rowData.title2;

    if (gridRowUpdatingEventArgs.rowData.rank == 2) {
        if (!gridRowUpdatingEventArgs.rowData.title2 || !gridRowUpdatingEventArgs.rowData.dataType2) {

            gridRowUpdatingEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_COLUMNA2I_43952', false, null, timer);
            gridRowUpdatingEventArgs.commons.execServer = false;
            gridRowUpdatingEventArgs.cancel = true;
            return;
        }
    }

    return gridRowUpdatingEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_SEVAAMOOG_84520").then(
        function (response) {
            switch (response.buttonIndex) {
                case 0: //cancel
                    gridRowUpdatingEventArgs.commons.execServer = false;
                    return false;
                case 1: //accept
                    gridRowUpdatingEventArgs.commons.execServer = true;
                    return true;

            }
        }
    );

};
