

//Entity: LoansLinesHeader
//LoansLinesHeader.fechaVencimiento (DateField) View: LoanLineCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FECHAVENCIMINOT_231412 = function(  entities, changedEventArgs ) {

    if (changedEventArgs.newValue && calcular && entities.LoanLinesCreation.startDate) {
        entities.LoanLinesCreation.daysNumber = null;
        changedEventArgs.commons.execServer = true;
    } else {
        if (!entities.LoanLinesCreation.startDate) {
            changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_FECHAINEQ_39778', false, null, timer);
        }
        changedEventArgs.commons.execServer = false;
        calcular = true;
    }
    //changedEventArgs.commons.serverParameters.LoansLinesHeader = true;

};