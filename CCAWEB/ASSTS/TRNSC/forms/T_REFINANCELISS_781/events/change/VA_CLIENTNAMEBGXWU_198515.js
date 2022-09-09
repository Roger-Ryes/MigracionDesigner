//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.clientName (TextInputButton) View: RefinanceLoansFilter
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_CLIENTNAMEBGXWU_198515 = function(  entities, changedEventArgs ) {

        changedEventArgs.commons.execServer = false;
        changedEventArgs.commons.api.grid.removeAllRows('RefinanceLoans');
    cleanElements(entities);
        
    };