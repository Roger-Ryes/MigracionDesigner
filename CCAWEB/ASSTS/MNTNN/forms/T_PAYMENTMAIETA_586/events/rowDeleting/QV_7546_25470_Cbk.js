//Start signature to callBack event to QV_7546_25470
    task.gridRowDeletingCallback.QV_7546_25470 = function(entities, gridRowDeletingEventArgs) {
    if (gridRowDeletingEventArgs.success) {
        gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, timer);
    }
    };