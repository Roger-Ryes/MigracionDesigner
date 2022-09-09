//Start signature to Callback event to QV_QF17_TGN52
task_gridRowDeletingCallback_QV_QF17_TGN52 = (
    entities: Model,
    gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
    if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
    }
};
