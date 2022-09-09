//Start signature to Callback event to VA_1KIRFVKPRWSWCCE_730397
task.changeCallback.VA_1KIRFVKPRWSWCCE_730397 = function(entities, changeCallbackEventArgs) {
    
    var viewState = changeCallbackEventArgs.commons.api.viewState;
    var amount = entities.AggregateDeferredItemsEntity.amount;
    
    if (changeCallbackEventArgs.success && amount > 0) {
        viewState.enable('CM_TASSTSHR_TNS'); //Transmitir
    }else{
        viewState.disable('CM_TASSTSHR_TNS'); //Transmitir
    }
     
};
