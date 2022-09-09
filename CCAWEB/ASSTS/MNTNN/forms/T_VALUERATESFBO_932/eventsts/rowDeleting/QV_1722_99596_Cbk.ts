//Start signature to callBack event to QV_1722_99596
    task_gridRowDeletingCallback_QV_1722_99596 = (
        entities: Model,
        gridRowDeletingEventArgs: CobisModelGridRowActionCallbackEventArgs
    ) => {
        //here your code
    if (gridRowDeletingEventArgs.success) {
        gridRowDeletingEventArgs.commons.api.grid.removeAllRows("Rates");
        gridRowDeletingEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELIMINAET_70731", false, null, this.ASSTS.timer);
    }

        
    };