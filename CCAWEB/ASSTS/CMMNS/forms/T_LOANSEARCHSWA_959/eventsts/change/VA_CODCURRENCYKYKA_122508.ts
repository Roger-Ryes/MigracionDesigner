//Entity: LoanSearchFilter
    //LoanSearchFilter.codCurrency (ComboBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_CODCURRENCYKYKA_122508 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
     changedEventArgs.commons.api.grid.removeAllRows("Loan");
        
    };