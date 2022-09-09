//Start signature to callBack event to CM_TRATESMO_TU_
    task_executeCommandCallback_CM_TRATESMO_TU_ = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
        //here your code
    if (executeCommandEventArgs.success) {
        let aceptButton: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);
        if (executeCommandEventArgs.commons.api.vc.mode == executeCommandEventArgs.commons.constants.mode.Update) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, this.ASSTS.timer);
        } else {

            if (entities.Entity1.modeOp == 'U') {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELREGISSD_75841", false, null, this.ASSTS.timer);
            } else {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, this.ASSTS.timer);
            }


        }
    }

    };