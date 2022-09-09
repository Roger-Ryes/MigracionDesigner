//Start signature to callBack event to CM_TTYPERAT_R0N
    task_executeCommandCallback_CM_TTYPERAT_R0N = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
    if (executeCommandEventArgs.success) {
        let aceptButton: any = true;
        executeCommandEventArgs.commons.api.navigation.closeModal(aceptButton);

        if (executeCommandEventArgs.commons.api.vc.mode == executeCommandEventArgs.commons.constants.mode.Update) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, timer);
        } else {

            if (entities.Entity1.modeOp == 'U') {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_ELREGISSD_75841", false, null, timer);
            } else {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_REGISTRAS_48950", false, null, timer);
            }


        }
    }

    };