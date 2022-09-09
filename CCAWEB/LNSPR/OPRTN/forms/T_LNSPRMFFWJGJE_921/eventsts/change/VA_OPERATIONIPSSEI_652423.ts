//Entity: LoanSearchFilter
    //LoanSearchFilter.operation (TextInputBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_OPERATIONIPSSEI_652423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        entities.LoanSearchFilter.seleccionarTodo = false;
        
        changedEventArgs.commons.api.grid.removeAllRows('LoanList');
        changedEventArgs.commons.execServer = false;
    };