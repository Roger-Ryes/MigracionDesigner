

//Entity: LoansLines
//LoansLines.estado (DropDownList) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOZXSPUMQFP_238383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
  changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
};