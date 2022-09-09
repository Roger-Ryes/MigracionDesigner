//Entity: LoanItemsList
//LoanItemsList. (Button) View: LoanItemsForm
task_gridRowCommand_VA_GRIDROWCOMMMAND_816116 = async (
    entities: Model,
    gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {
    let response: any = await firstValueFrom(
        gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTASEGSE_19372")
    );

    switch (response.buttonIndex) {
            case 0: //cancel
                gridRowCommandEventArgs.commons.execServer = false;
                return false;
            case 1: //accept
                gridRowCommandEventArgs.commons.execServer = true;
                return true;

        }
};
