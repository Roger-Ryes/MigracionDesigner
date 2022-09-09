
//Start signature to Callback event to VC_DEFERREDIT_242203
task_initDataCallback_VC_DEFERREDIT_242203 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
     if (initDataCallbackEventArgs.success) {
         
        Amortization.showTableAmortization("QV_JT23_FZW47", entities, initDataCallbackEventArgs);

    }
};
