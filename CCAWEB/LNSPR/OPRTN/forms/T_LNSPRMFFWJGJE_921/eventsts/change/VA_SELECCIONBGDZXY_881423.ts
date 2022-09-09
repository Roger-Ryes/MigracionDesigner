//Entity: LoanList
    //LoanList.seleccion (CheckBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_SELECCIONBGDZXY_881423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
        changedEventArgs.commons.execServer = false;
        
        for (let i: any = 0; i < entities.LoanList.length; i++) {
            if (entities.LoanList[i].id === changedEventArgs.rowData.id) {
                changedEventArgs.commons.api.grid.updateRow('LoanList', i, {seleccion: (changedEventArgs.rowData.seleccion !== true? true:false)});
                break;
            }
        }
    };