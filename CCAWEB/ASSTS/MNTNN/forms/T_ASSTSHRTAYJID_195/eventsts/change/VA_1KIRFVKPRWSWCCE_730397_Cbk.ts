//Start signature to Callback event to VA_1KIRFVKPRWSWCCE_730397
task_changeCallback_VA_1KIRFVKPRWSWCCE_730397 = (
    entities: Model,
    changeCallbackEventArgs: CobisModelChangeCallbackEventArgs
) => {
    let viewState: any = changeCallbackEventArgs.commons.api.viewState;
    let amount: any = entities.AggregateDeferredItemsEntity.amount;

    if (changeCallbackEventArgs.success && amount > 0) {
        viewState.enable('CM_TASSTSHR_TNS'); //Transmitir
    }else{
        viewState.disable('CM_TASSTSHR_TNS'); //Transmitir
    }
};
