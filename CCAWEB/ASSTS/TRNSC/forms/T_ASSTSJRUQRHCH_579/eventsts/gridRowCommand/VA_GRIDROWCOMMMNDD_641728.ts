
//Entity: NoAppliedPayment
//NoAppliedPayment. (Button) View: NoAppliedPaymentsForm
task_gridRowCommand_VA_GRIDROWCOMMMNDD_641728 = async (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {
    let response: any = await firstValueFrom(
        gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUNA_86756")
    );

    switch (response.buttonIndex) {
            case 0: //cancel
                
                gridRowCommandEventArgs.commons.execServer = false;
              break;
            case 1: //accept
                
                gridRowCommandEventArgs.commons.execServer = true;
                return true;
                break;
        }
};