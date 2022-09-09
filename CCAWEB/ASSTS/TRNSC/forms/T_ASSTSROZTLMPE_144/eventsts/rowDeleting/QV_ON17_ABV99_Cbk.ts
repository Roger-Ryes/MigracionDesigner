
//Start signature to Callback event to QV_ON17_ABV99
task_gridRowDeletingCallback_QV_ON17_ABV99 = (
     entities: Model,
     gridRowDeletingCallbackEventArgs: CobisModelGridRowActionCallbackEventArgs
) => {
     //here your code
     if (gridRowDeletingCallbackEventArgs.success) {
          gridRowDeletingCallbackEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_ELIMINAET_70731', false, null, timer);
     }
};
