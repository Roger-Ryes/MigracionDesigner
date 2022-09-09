

//Entity: LoanSearchFilter
//LoanSearchFilter.state (DropDownList) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_STATESICWPQOPFM_485293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    entities.LoanSearchFilter.seleccionarTodo = false;   
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

};