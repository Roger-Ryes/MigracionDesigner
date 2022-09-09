//Start signature to callBack event to QV_5693_54772
    task.gridRowDeletingCallback.QV_5693_54772 = function(entities, gridRowDeletingEventArgs) {

    if (gridRowDeletingEventArgs.success) {
        gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, timer);
        }
    };