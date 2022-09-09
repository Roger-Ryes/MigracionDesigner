//Start signature to Callback event to VC_AMORTIZAII_339261
task_initDataCallback_VC_AMORTIZAII_339261 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    if (initDataCallbackEventArgs.success) {
        this.ASSTS.Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataCallbackEventArgs);
    }
};
