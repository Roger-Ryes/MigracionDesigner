

//Entity: LoansLines
//LoansLines.oficina (DropDownList) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_OFICINANRBOTWYT_467383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

};