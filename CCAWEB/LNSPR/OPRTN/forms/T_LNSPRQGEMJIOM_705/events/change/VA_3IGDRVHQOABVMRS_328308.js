//Entity: LoansLineGuarantee
//LoansLineGuarantee.guaranteeType (TextInputButton) View: LoansLineGuaranteesForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_3IGDRVHQOABVMRS_328308 = function (entities, changedEventArgs) {

    changedEventArgs.commons.execServer = false;
    if (!changedEventArgs.newValue)
        entities.LoansLineGuarantee.guaranteeTypeCode = null;

};
