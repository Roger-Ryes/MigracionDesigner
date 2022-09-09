//Entity: LoanSearchFilter
    //LoanSearchFilter.type (ComboBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_TYPEOPERATIONNN_501423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
        changedEventArgs.commons.execServer = false;
    };