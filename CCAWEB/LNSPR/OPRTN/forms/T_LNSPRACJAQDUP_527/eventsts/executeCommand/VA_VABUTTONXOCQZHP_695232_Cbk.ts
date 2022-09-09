//Start signature to Callback event to VA_VABUTTONXOCQZHP_695232
task_executeCommandCallback_VA_VABUTTONXOCQZHP_695232 = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
    if(executeCommandCallbackEventArgs.success){
        let commons: any = executeCommandCallbackEventArgs.commons;
        commons.args.mode = commons.constants.mode.Insert
        // commons.api.viewState.label("VA_VABUTTONNVDIOQB_352232", "LNSPR.LBL_LOANS_LIMPIARVF_75606"); //Cmd Limpiar
        //commons.api.viewState.label("VA_VABUTTONXOCQZHP_695232", "LNSPR.LBL_LOANS_AADIRWOQO_72396"); //Cmd Añadir
        commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_OPERACIOA_60671", false, null, timer);

        //Limpiar entity
        entities.PaymentAutomatic.institution = null
        entities.PaymentAutomatic.institutionName = null
        entities.PaymentAutomatic.institutionOld = null
        entities.PaymentAutomatic.client = null
        entities.PaymentAutomatic.clientName = null
        entities.PaymentAutomatic.clientOld = null
        entities.PaymentAutomatic.comments = null
        entities.PaymentAutomatic.percentage = 0.0
        entities.PaymentAutomatic.account = null

        commons.api.grid.refresh('QV_WX74_OJZ40',{
            bankId: entities.PaymentAutomatic.bankId,
            paymentMethod: entities.PaymentAutomatic.paymentMethod
        });
    }
};
