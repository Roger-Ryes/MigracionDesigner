
//Start signature to Callback event to CM_TASSTSFP_3SA
task.executeCommandCallback.CM_TASSTSFP_3SA = function(entities, executeCommandCallbackEventArgs) {

    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_FL15_OEC17');
    }
};
