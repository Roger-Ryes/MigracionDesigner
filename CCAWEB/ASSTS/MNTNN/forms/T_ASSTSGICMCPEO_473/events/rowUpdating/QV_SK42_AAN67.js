//gridRowUpdating QueryView: QV_SK42_AAN67
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_SK42_AAN67 = function (entities, gridRowUpdatingEventArgs) {

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
    //gridRowUpdatingEventArgs.commons.serverParameters.OneRankList = true;

};
