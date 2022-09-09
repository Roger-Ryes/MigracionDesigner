//Entity: LoansLineGuarantee
//LoansLineGuarantee.client (TextInputButton) View: LoansLineGuaranteesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_1SNQSNEUKHHSXYG_701308 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
        entities.LoansLineGuarantee.clientCode = null;

};
