
//Start signature to Callback event to VC_DEFERREDIT_242203
task.initDataCallback.VC_DEFERREDIT_242203 = function(entities, initDataCallbackEventArgs) {
     if (initDataCallbackEventArgs.success) {
         
        Amortization.showTableAmortization("QV_JT23_FZW47", entities, initDataCallbackEventArgs);

    }
};
