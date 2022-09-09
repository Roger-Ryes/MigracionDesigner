//Start signature to callBack event to QV_5693_54772
    task_gridRowDeletingCallback_QV_5693_54772 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
    ) => {

    if (gridRowDeletingEventArgs.success) {
        gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
        }
    };