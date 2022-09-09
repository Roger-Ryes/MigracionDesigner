
//Start signature to Callback event to QV_ON17_ABV99
task.gridRowDeletingCallback.QV_ON17_ABV99 = function(entities, gridRowDeletingCallbackEventArgs) {
     //here your code
     if (gridRowDeletingCallbackEventArgs.success) {
          gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
     }
};
