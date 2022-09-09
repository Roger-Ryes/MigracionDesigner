


//Command4 (Button) 
task.executeCommand.CM_TLNSPRMF_F7N = function(entities, executeCommandEventArgs) {
    
    executeCommandEventArgs.commons.api.grid.removeAllRows('MassiveCommissions');
    entities.LoanSearchFilter.archivo = null;
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.viewState.show('G_LOANSEARCR_617423');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');
  

    executeCommandEventArgs.commons.execServer = false;

};