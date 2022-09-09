//Start signature to Callback event to VA_CURRENCYSPEYFQA_285141
task.changeCallback.VA_CURRENCYSPEYFQA_285141 = function (entities, changeCallbackEventArgs) {
    if (!changeCallbackEventArgs.success) {
        entities.Payment.quotation = 0.00;
        entities.Payment.typeQuotationTe = "";
    } else {
        changeCallbackEventArgs.commons.api.viewState.label("VA_AMOUNTPREPAYTME_876141", cobis.translate("ASSTS.LBL_ASSTS_SALDOPRCN_87630") + " " + "(" +
            changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
        changeCallbackEventArgs.commons.api.viewState.label("VA_AMOUNTPAYMENTTT_215141", cobis.translate("ASSTS.LBL_ASSTS_VALORAPAA_99910") + " " + "(" +
            changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
        changeCallbackEventArgs.commons.api.viewState.label("VA_VALUEEFNQCTRLMP_628141", cobis.translate("ASSTS.LBL_ASSTS_MONTOEMFX_52083") + " " + "(" +
            changeCallbackEventArgs.commons.api.viewState.getDataItem("VA_CURRENCYSPEYFQA_285141").value + ")");
    }
};
