

//Entity: LoansLines
//LoansLines.numLinea (TextInputBox) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_NUMLINEACKAOJVB_120383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
};