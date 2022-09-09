
//Start signature to Callback event to VC_LOANLINESS_983793
task_initDataCallback_VC_LOANLINESS_983793 = (
    entities: Model,
    initDataCallbackEventArgs: CobisModelInitDataCallbackEventArgs
) => {
     //here your code
    if(initDataCallbackEventArgs.success){
        if(entities.ValidationGroup.result === 'N'){
          
            initDataCallbackEventArgs.commons.api.vc.viewState.G_LOANLINACR_870461.visible = false;
            
        }
    }
};
