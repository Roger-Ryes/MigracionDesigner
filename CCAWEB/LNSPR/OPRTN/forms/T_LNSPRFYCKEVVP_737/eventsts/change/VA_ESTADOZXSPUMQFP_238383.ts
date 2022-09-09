

//Entity: LoansLines
//LoansLines.estado (DropDownList) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_ESTADOZXSPUMQFP_238383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
  changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
};