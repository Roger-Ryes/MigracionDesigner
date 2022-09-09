//Start signature to Callback event to VC_LOANSTATCE_588120
task_initDataCallback_VC_LOANSTATCE_588120 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
    this.ASSTS.Amortization.showTableAmortization("QV_LM37_VTI26", entities, initDataCallbackEventArgs);
};
