

//Entity: LoanSearchFilter
//LoanSearchFilter.numProcedures (TextInputBox) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NUMPROCEDURESSS_610293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    entities.LoanSearchFilter.seleccionarTodo = false;        
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

};