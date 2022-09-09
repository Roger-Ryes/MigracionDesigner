
//Start signature to Callback event to QV_ZZ84_YVC22
task.gridRowDeletingCallback.QV_ZZ84_YVC22 = function(entities, gridRowDeletingCallbackEventArgs) {
      if (gridRowDeletingCallbackEventArgs.success) {
        gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.LBL_LNSPR_ELIMINATR_48672', false, null, timer);
    }
};
