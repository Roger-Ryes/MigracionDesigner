//Start signature to Callback event to CM_TASSTSEG_JJT
task.executeCommandCallback.CM_TASSTSEG_JJT = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.vc.closeModal({
            response: true
        });
    }
};
