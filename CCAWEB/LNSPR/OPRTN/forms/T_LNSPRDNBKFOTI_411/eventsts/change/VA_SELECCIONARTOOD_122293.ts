

//Entity: LoanSearchFilter
//LoanSearchFilter.seleccionarTodo (CheckBox) View: StatusChangeMassiveForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_SELECCIONARTOOD_122293 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    changedEventArgs.commons.execServer = false;
    for (let i: any = 0; i < entities.LoanList.length; i++) {
            changedEventArgs.commons.api.grid.updateRow('LoanList', i, {seleccion: changedEventArgs.newValue});
    }

};