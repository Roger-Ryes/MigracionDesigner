

//Entity: LoanSearchFilter
//LoanSearchFilter.office (DropDownList) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_OFFICEOKJCKNOJM_266293 = function(  entities, changedEventArgs ) {
    
    entities.LoanSearchFilter.seleccionarTodo = false;
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

};