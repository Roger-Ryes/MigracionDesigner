
//LoanListQuery Entity: LoanList
task.executeQuery.Q_LOANSILT_NX50 = function(executeQueryEventArgs){
    
    var model = executeQueryEventArgs.commons.api.vc.model;
    executeQueryEventArgs.parameters.numIdentification = model.LoanSearchFilter.numIdentification ? model.LoanSearchFilter.numIdentification : null;
    
    executeQueryEventArgs.parameters.loanBankID = model.LoanSearchFilter.operation ? model.LoanSearchFilter.operation : null;
    
    executeQueryEventArgs.parameters.numProcedure = model.LoanSearchFilter.numProcedures ? model.LoanSearchFilter.numProcedures : null;
    
    executeQueryEventArgs.parameters.office = model.LoanSearchFilter.office ? model.LoanSearchFilter.office : null;
    
    executeQueryEventArgs.parameters.currency = model.LoanSearchFilter.codCurrency ? model.LoanSearchFilter.codCurrency : null;
    
    executeQueryEventArgs.parameters.disbursementDate = model.LoanSearchFilter.disbursementDate ? model.LoanSearchFilter.disbursementDate : null;
    
    executeQueryEventArgs.parameters.state = model.LoanSearchFilter.state;
    
    executeQueryEventArgs.parameters.migratedOperation = model.LoanSearchFilter.migratedOperation ? model.LoanSearchFilter.migratedOperation : null;
    
    executeQueryEventArgs.parameters.type = model.LoanSearchFilter.type ? model.LoanSearchFilter.type : null;
    
    if ((model.LoanSearchFilter.numIdentification) ||
        (model.LoanSearchFilter.operation) ||
        (model.LoanSearchFilter.numProcedures) ||
        (model.LoanSearchFilter.office)) {
                
        executeQueryEventArgs.commons.api.vc.model.LoanList.archivo = null;       
		executeQueryEventArgs.commons.execServer = true;

    }else{
	   executeQueryEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_DEBEINGTA_48173',         false,null,timer);
        executeQueryEventArgs.commons.execServer = false;
    }

};