//Entity: LoansLineGuarantee
//LoansLineGuarantee.client (TextInputButton) View: LoansLineGuaranteesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_1SNQSNEUKHHSXYG_701308 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
        entities.LoansLineGuarantee.clientCode = null;

};
