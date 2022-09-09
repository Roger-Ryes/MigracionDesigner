//Entity: RefinanceLoanFilter
    //RefinanceLoanFilter.clientName (TextInputButton) View: RefinanceLoansFilter
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    //designer-hint: 2304: Cannot find name 'task_change_VA_CLIENTNAMEBGXWU_198515'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelChangeEventArgs'.
    task_change_VA_CLIENTNAMEBGXWU_198515 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

        changedEventArgs.commons.execServer = false;
        changedEventArgs.commons.api.grid.removeAllRows('RefinanceLoans');
    this.cleanElements(entities);
        
    };