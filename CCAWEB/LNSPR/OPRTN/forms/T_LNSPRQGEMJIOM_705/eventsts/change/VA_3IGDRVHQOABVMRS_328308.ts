//Entity: LoansLineGuarantee
//LoansLineGuarantee.guaranteeType (TextInputButton) View: LoansLineGuaranteesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_3IGDRVHQOABVMRS_328308 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
        entities.LoansLineGuarantee.guaranteeTypeCode = null;

};
