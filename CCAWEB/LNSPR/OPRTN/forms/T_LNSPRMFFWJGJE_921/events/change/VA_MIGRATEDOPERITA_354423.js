//Entity: LoanSearchFilter
    //LoanSearchFilter.migratedOperation (TextInputBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_MIGRATEDOPERITA_354423 = function(  entities, changedEventArgs ) {
        entities.LoanSearchFilter.seleccionarTodo = false;
        
        changedEventArgs.commons.api.grid.removeAllRows('LoanList');
        changedEventArgs.commons.execServer = false;
    };