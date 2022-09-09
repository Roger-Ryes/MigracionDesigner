//Entity: LoanSearchFilter
    //LoanSearchFilter.type (ComboBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_TYPEOPERATIONNN_501423 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
        changedEventArgs.commons.execServer = false;
    };