//Start signature to callBack event to CM_APPLYCLA_C1S
    task.executeCommandCallback.CM_APPLYCLA_C1S = function(entities, executeCommandEventArgs) {
        //here your code
    if (executeCommandEventArgs.success) {
        Amortization.CapitalBalance(entities.Amortization.data());
        Amortization.resizeGrid("QV_LM37_VTI26");
        // executeCommandEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.MSG_ASSTS_REGISTRAO_10733", false, null, 3000);
    }

        
    };