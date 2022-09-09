//gridRowUpdating QueryView: QV_TJ88_MTX55
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowUpdating_QV_TJ88_MTX55 = async (
    entities: Model,
    gridRowUpdatingEventArgs: CobisModelGridRowActionEventArgs
) => {
    let response: any = await firstValueFrom(
        gridRowUpdatingEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_SEVAAMOOG_84520")
    );

    //gridRowUpdatingEventArgs.commons.serverParameters.TwoRangesList = true;

    switch (response.buttonIndex) {
            case 0: //cancel
                gridRowUpdatingEventArgs.commons.execServer = false;
                return false;
            case 1: //accept
                gridRowUpdatingEventArgs.commons.execServer = true;
                return true;

        }
};
