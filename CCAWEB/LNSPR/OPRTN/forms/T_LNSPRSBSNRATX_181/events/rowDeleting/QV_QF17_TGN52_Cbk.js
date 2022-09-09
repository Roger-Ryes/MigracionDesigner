//Start signature to Callback event to QV_QF17_TGN52
task.gridRowDeletingCallback.QV_QF17_TGN52 = function (entities, gridRowDeletingCallbackEventArgs) {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
    }
};
