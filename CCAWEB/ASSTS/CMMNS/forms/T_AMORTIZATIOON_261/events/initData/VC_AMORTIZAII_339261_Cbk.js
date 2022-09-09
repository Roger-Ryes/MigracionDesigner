//Start signature to Callback event to VC_AMORTIZAII_339261
task.initDataCallback.VC_AMORTIZAII_339261 = function (entities, initDataCallbackEventArgs) {
    if (initDataCallbackEventArgs.success) {
        Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataCallbackEventArgs);
    }
};
