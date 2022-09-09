//Start signature to callBack event to CM_TLOANDIS_S5N
    task.executeCommandCallback.CM_TLOANDIS_S5N = function(entities, executeCommandEventArgs) {
        //here your code
        if(executeCommandEventArgs.success){
        
         executeCommandEventArgs.commons.api.vc.viewState.CM_TLOANDIS_S5N.disabled = true;
         
      }
    };