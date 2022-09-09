

//Entity: LoansLines
//LoansLines.dateIni (DateField) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_DATEINIHDUJJRBN_500383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');

};