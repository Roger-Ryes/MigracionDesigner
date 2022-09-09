
//Start signature to Callback event to VA_ARCHIVOEWNXRMQG_617293
task.executeCommandCallback.VA_ARCHIVOEWNXRMQG_617293 = function(entities, executeCommandCallbackEventArgs) {
    if(executeCommandCallbackEventArgs.success){
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_DESCSTATUSKOPMT_184293');
    }else{
        executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    }
};
