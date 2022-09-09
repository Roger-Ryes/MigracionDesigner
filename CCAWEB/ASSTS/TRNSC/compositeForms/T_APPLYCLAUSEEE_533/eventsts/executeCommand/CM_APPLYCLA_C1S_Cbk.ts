//Start signature to callBack event to CM_APPLYCLA_C1S
    task_executeCommandCallback_CM_APPLYCLA_C1S = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
        //here your code
    if (executeCommandEventArgs.success) {
        Amortization.CapitalBalance(entities.Amortization);
        Amortization.resizeGrid("QV_LM37_VTI26");
        // executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, 3000);
    }

        
    };