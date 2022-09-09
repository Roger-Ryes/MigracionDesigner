

//Entity: LoansLines
//LoansLines.numLinea (TextInputBox) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NUMLINEACKAOJVB_120383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
      changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
};