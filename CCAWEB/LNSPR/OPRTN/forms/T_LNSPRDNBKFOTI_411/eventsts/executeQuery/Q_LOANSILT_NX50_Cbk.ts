
//Start signature to Callback event to Q_LOANSILT_NX50
task_executeQueryCallback_Q_LOANSILT_NX50 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
    
    if(entities.LoanList.length>0){
        executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOEWNXRMQG_617293');
        executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_DESCSTATUSKOPMT_184293');
    }else{
        executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }
     
};
