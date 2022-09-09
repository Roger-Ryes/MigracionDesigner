
//Start signature to Callback event to VC_LOANLINESS_983793
task.initDataCallback.VC_LOANLINESS_983793 = function(entities, initDataCallbackEventArgs) {
     //here your code
    if(initDataCallbackEventArgs.success){
        if(entities.ValidationGroup.result === 'N'){
          
            initDataCallbackEventArgs.commons.api.vc.viewState.G_LOANLINACR_870461.visible = false;
            
        }
    }
};
