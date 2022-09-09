

//Entity: LoanSearchFilter
//LoanSearchFilter.state (DropDownList) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_STATESICWPQOPFM_485293 = function(  entities, changedEventArgs ) {
    
    entities.LoanSearchFilter.seleccionarTodo = false;   
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

};