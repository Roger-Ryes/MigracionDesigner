
//Start signature to Callback event to Q_LOANSILT_NX50
task.executeQueryCallback.Q_LOANSILT_NX50 = function(entities, executeQueryCallbackEventArgs) {
    
    if(entities.LoanList._data.length>0){
        executeQueryCallbackEventArgs.commons.api.viewState.disable('VA_ARCHIVOEWNXRMQG_617293');
        executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_DESCSTATUSKOPMT_184293');
    }else{
        executeQueryCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }
     
};
