//Start signature to callBack event to CM_TPAYMENT_TM7
    task_executeCommandCallback_CM_TPAYMENT_TM7 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
        //here your code
    //executeCommandEventArgs.commons.execServer = false;
    if (executeCommandEventArgs.success) {
        let aceptButton: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);
        if (executeCommandEventArgs.commons.api.vc.mode == 2) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, this.ASSTS.timer);
        } else {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, this.ASSTS.timer);
        }
    }


    };