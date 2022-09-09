//Start signature to callBack event to CM_TLOANDIS_S5N
    task_executeCommandCallback_CM_TLOANDIS_S5N = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandCallbackEventArgs
    ) => {
        //here your code
        if(executeCommandEventArgs.success){
        
         executeCommandEventArgs.commons.api.vc.viewState.CM_TLOANDIS_S5N.disabled = true;
         
      }
    };