//Entity: PaymentAutomatic
//PaymentAutomatic. (Button) View: RepaymentCreateForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task_executeCommand_VA_VABUTTONXOCQZHP_695232 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let total: any = 0;
    let commons: any = executeCommandEventArgs.commons;

    //executeCommandEventArgs.commons.serverParameters.PaymentAutomatic = true;
    if (entities.PaymentAutomaticList.length > 0) {
        entities.PaymentAutomaticList.forEach(({
            percentage
        }) => {
            total = total + percentage;
        })
    }

    if ((entities.PaymentAutomatic.percentage + total) > 100) {
        executeCommandEventArgs.commons.execServer = false;
        commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, timer);
    } else {
    executeCommandEventArgs.commons.execServer = true;
    }
};