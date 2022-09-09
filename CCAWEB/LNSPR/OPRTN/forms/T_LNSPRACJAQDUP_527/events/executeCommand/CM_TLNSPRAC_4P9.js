// (Button) 
task.executeCommand.CM_TLNSPRAC_4P9 = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    let total = 0;
    var commons = executeCommandEventArgs.commons;
    if (entities.PaymentAutomaticList.data().length > 0) {
        entities.PaymentAutomaticList.data().forEach(({
            percentage
        }) => {
            total = total + percentage;
        })
    }

    if (total < 100 && total > 0) {
        commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PORCENTED_35766", false, null, timer);
    } else {

        executeCommandEventArgs.commons.api.vc.closeModal({});
    }

};
