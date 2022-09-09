

//Entity: LoansLines
//LoansLines.dateVto (DateField) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_DATEVTOIOLFWTXY_452383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
  changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
};