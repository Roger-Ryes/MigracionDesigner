//Entity: LoansLinesHeader
//LoansLinesHeader.naturalezaOp (RadioButtonList) View: LoanLinesCreation
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NATURALEZAOPFBV_807412 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    changedEventArgs.commons.api.viewState.enable('VA_CLIENTENOMBREEE_802412');
    if (changedEventArgs.newValue == 'P') {
        changedEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
    } else {
        changedEventArgs.commons.api.viewState.label("VA_CLIENTENOMBREEE_802412", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
    }
    
    changedEventArgs.commons.execServer = false;

};