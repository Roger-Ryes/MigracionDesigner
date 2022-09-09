//Entity: LoanSearchFilter
    //LoanSearchFilter.nextReadjDate (DateField) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_NEXTREADJDATEEE_737423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
        changedEventArgs.commons.execServer = false;
    };