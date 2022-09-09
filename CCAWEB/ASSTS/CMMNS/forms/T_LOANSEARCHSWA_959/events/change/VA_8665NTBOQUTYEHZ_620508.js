//Entity: LoanSearchFilter
    //LoanSearchFilter.group (CheckBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_8665NTBOQUTYEHZ_620508 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 'S') {
            changedEventArgs.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508", "ASSTS.LBL_ASSTS_CDIGOGRPU_89879");
        //isGroup = 'S'
        } else {
            changedEventArgs.commons.api.viewState.label("VA_CODCLIENTCIXLEY_866508", "ASSTS.LBL_ASSTS_CDIGOCLEN_93241");
        //isGroup = 'N'
        }
    };