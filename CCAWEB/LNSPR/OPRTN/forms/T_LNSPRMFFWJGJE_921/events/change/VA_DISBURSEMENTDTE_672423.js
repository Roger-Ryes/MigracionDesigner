//Entity: LoanSearchFilter
    //LoanSearchFilter.disbursementDate (DateField) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_DISBURSEMENTDTE_672423 = function(  entities, changedEventArgs ) {
        entities.LoanSearchFilter.seleccionarTodo = false;
        
        changedEventArgs.commons.api.grid.removeAllRows('LoanList');
        changedEventArgs.commons.execServer = false;
    };