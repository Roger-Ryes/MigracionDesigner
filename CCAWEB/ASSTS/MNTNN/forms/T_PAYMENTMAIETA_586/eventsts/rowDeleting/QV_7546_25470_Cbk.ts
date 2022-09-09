//Start signature to callBack event to QV_7546_25470
    task_gridRowDeletingCallback_QV_7546_25470 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
    ) => {
    if (gridRowDeletingEventArgs.success) {
        gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }
    };