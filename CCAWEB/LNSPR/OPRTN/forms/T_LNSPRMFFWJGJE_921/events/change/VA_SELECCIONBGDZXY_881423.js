//Entity: LoanList
    //LoanList.seleccion (CheckBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task.change.VA_SELECCIONBGDZXY_881423 = function(  entities, changedEventArgs ) {
        changedEventArgs.commons.execServer = false;
        
        for (var i = 0; i < entities.LoanList.data().length; i++) {
            if (entities.LoanList.data()[i].id === changedEventArgs.rowData.id) {
                changedEventArgs.commons.api.grid.updateRow('LoanList', i, {seleccion: (changedEventArgs.rowData.seleccion !== true? true:false)});
                break;
            }
        }
    };