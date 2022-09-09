// (Button) 
task_executeCommand_CM_TLNSPRAC_4P9 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let total: any = 0;
    let commons: any = executeCommandEventArgs.commons;
    if (entities.PaymentAutomaticList.length > 0) {
        entities.PaymentAutomaticList.forEach(({
            percentage
        }) => {
            total = total + percentage;
        })
    }

    if (total < 100 && total > 0) {
        commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PORCENTED_35766", false, null, timer);
    } else {

        executeCommandEventArgs.commons.api.navigation.closeModal({});
    }
};
