//Entity: LoansLines
//LoansLines.naturaleza (RadioButtonList) View: LoansLines
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_NATURALEZAEFWDR_861383 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    changedEventArgs.commons.execServer = false;
    entities.LoansLines.clienteDesc = null;
    entities.LoansLines.clientCode = null;
    changedEventArgs.commons.api.grid.removeAllRows('LoansLinesList');
    if (changedEventArgs.newValue == 'P') {
        changedEventArgs.commons.api.viewState.label("VA_CLIENTEDESCMPQT_151383", "LNSPR.LBL_LNSPR_FONDEADOR_63367");
    } else {
        changedEventArgs.commons.api.viewState.label("VA_CLIENTEDESCMPQT_151383", "LNSPR.LBL_LNSPR_CLIENTEPO_59022");
    }


};
