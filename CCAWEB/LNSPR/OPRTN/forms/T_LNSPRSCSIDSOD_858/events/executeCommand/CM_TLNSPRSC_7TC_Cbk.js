//Start signature to Callback event to CM_TLNSPRSC_7TC
task.executeCommandCallback.CM_TLNSPRSC_7TC = function (entities, executeCommandCallbackEventArgs) {

    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
    }
};
