

//Entity: LoanSearchFilter
//LoanSearchFilter.codCurrency (DropDownList) View: StatusChangeMassive
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CODCURRENCYNEWR_137293 = function(  entities, changedEventArgs ) {
    
    entities.LoanSearchFilter.seleccionarTodo = false; 
    changedEventArgs.commons.api.grid.removeAllRows('LoanList');
    changedEventArgs.commons.execServer = false;

};