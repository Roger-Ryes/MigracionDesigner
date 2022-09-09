//Start signature to Callback event to CM_TLOANSTA_STA
task.executeCommandCallback.CM_TLOANSTA_STA = function (entities, executeCommandCallbackEventArgs) {

    if (executeCommandCallbackEventArgs.success) {
        entities.Loan.statusCopy = executeCommandCallbackEventArgs.commons.api.viewState.getDataItem("VA_NEWSTATUSLZHCOE_110722").value;
        executeCommandCallbackEventArgs.commons.api.viewState.hide('VA_NEWSTATUSLZHCOE_110722');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TLOANSTA_STA');
            }
};
