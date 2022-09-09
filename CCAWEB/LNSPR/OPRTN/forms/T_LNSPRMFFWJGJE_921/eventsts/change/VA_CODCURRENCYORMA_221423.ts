//Entity: LoanSearchFilter
    //LoanSearchFilter.codCurrency (ComboBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_CODCURRENCYORMA_221423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        entities.LoanSearchFilter.seleccionarTodo = false;
        
        changedEventArgs.commons.api.grid.removeAllRows('LoanList');
        changedEventArgs.commons.execServer = false;
    };