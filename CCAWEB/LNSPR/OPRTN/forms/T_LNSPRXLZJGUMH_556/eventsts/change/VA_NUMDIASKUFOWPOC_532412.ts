

//Entity: LoansLinesHeader
//LoansLinesHeader.numDias (TextInputBox) View: LoanLinesCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NUMDIASKUFOWPOC_532412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if (changedEventArgs.newValue && calcular && entities.LoanLinesCreation.startDate) {
        entities.LoanLinesCreation.dueDate = null;
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