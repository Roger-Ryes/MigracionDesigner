


// (Button) 
task.executeCommand.CM_TLNSPRDN_TRO = function(entities, executeCommandEventArgs) {
    
    if (entities.LoanSearchFilter.numIdentification) {
        entities.LoanSearchFilter.numIdentification = null;
    }
    
    if (entities.LoanSearchFilter.operation) {
        entities.LoanSearchFilter.operation = null;
    }
    
    if (entities.LoanSearchFilter.numProcedures) {
        entities.LoanSearchFilter.numProcedures = null;
    }
    
    if (entities.LoanSearchFilter.office) {
        entities.LoanSearchFilter.office = null;
    }
    
    if (entities.LoanSearchFilter.numProcedures) {
        entities.LoanSearchFilter.numProcedures = null;
    }
    
    if (entities.LoanSearchFilter.codCurrency) {
        entities.LoanSearchFilter.codCurrency = null;
    }
    
    if (entities.LoanSearchFilter.disbursementDate) {
        entities.LoanSearchFilter.disbursementDate = null;
    }
    
    if (entities.LoanSearchFilter.state) {
        entities.LoanSearchFilter.state = null;
    }
    
    if (entities.LoanSearchFilter.migratedOperation) {
        entities.LoanSearchFilter.migratedOperation = null;
    }
    
    if (entities.LoanSearchFilter.type) {
        entities.LoanSearchFilter.type = null;
    }
    
    executeCommandEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    executeCommandEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    executeCommandEventArgs.commons.api.viewState.disable('VA_DESCSTATUSKOPMT_184293');
    entities.LoanSearchFilter.seleccionarTodo = false; 
    executeCommandEventArgs.commons.api.grid.removeAllRows('LoanList');
    executeCommandEventArgs.commons.api.vc.removeFile('VA_ARCHIVOEWNXRMQG_617293');
    entities.LoanSearchFilter.avanceSearch = false;
    entities.StatesAssetsLoan.descStatus = null;
    
    executeCommandEventArgs.commons.execServer = false;

};