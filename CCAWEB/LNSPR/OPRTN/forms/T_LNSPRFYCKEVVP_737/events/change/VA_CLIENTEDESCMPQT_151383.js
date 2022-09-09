

//Entity: LoansLines
//LoansLines.clienteDesc (TextInputButton) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_CLIENTEDESCMPQT_151383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

};