//Entity: LoanSearchFilter
    //LoanSearchFilter.nextReadjDate (DateField) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_NEXTREADJDATEEE_737423 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
        changedEventArgs.commons.execServer = false;
    };