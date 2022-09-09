//Entity: LoanItemsList
//LoanItemsList. (Button) View: LoanItemsForm
task.gridRowCommand.VA_GRIDROWCOMMMAND_816116 = function (entities, gridRowCommandEventArgs) {

    return gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTASEGSE_19372").then(
        function (response) {
            switch (response.buttonIndex) {
                case 0: //cancel
                    gridRowCommandEventArgs.commons.execServer = false;
                    return false;
                case 1: //accept
                    gridRowCommandEventArgs.commons.execServer = true;
                    return true;

            }
        }
    );

};
