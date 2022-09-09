//Entity: LoanSearchFilter
    //LoanSearchFilter.seleccionarTodo (CheckBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_SELECCIONARTOOD_173423 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.execServer = false;

        for (var i = 0; i < entities.LoanList.data().length; i++) {
            changedEventArgs.commons.api.grid.updateRow('LoanList', i, {seleccion: changedEventArgs.newValue});
        }
    };