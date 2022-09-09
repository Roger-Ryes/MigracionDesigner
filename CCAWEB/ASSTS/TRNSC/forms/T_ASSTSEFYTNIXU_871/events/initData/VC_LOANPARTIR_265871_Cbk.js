//Start signature to Callback event to VC_LOANPARTIR_265871
task.initDataCallback.VC_LOANPARTIR_265871 = function (entities, initDataCallbackEventArgs) {
    if (initDataCallbackEventArgs.success) {
        initDataCallbackEventArgs.commons.api.viewState.show('CM_TASSTSEF_N17');
        initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARNSB_185369');
        initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARNET_643369');
        initDataCallbackEventArgs.commons.api.viewState.show('G_LOANPARTDT_335369');
    } else {
        initDataCallbackEventArgs.commons.api.viewState.hide('CM_TASSTSEF_N17');
        initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNSB_185369');
        initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARNET_643369');
        initDataCallbackEventArgs.commons.api.viewState.hide('G_LOANPARTDT_335369');
    }
};
