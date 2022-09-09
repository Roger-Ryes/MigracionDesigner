//Start signature to Callback event to QV_NW92_QCN40
task_gridRowDeletingCallback_QV_NW92_QCN40 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
 gridRowDeletingCallbackEventArgs.commons.api.grid.refresh('QV_NW92_QCN40');
    }

};
