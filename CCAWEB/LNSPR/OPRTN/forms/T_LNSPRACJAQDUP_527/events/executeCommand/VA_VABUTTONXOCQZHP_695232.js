//Entity: PaymentAutomatic
//PaymentAutomatic. (Button) View: RepaymentCreateForm
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VABUTTONXOCQZHP_695232 = function(  entities, executeCommandEventArgs ) {
    let total = 0;
    var commons = executeCommandEventArgs.commons;

    //executeCommandEventArgs.commons.serverParameters.PaymentAutomatic = true;
    if (entities.PaymentAutomaticList.data().length > 0) {
        entities.PaymentAutomaticList.data().forEach(({
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