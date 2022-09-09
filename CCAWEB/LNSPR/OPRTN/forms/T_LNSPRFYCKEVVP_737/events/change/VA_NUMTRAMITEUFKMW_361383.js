

//Entity: LoansLines
//LoansLines.numTramite (TextInputBox) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_NUMTRAMITEUFKMW_361383 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

};