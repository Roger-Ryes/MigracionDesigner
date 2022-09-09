//Entity: CompaniesDiscountsFileList
//CompaniesDiscountsFileList.approved (CheckBox) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_COMBOBOXDBBXSFA_201960 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let api: any = changedEventArgs.commons.api;
    let tmpseq: any = changedEventArgs.rowData.sequential;
    if(entities.CompaniesBatch.statusId < 2 ){
        changedEventArgs.rowData.approved = !changedEventArgs.rowData.approved
        api.grid.updateRow(
            'CompaniesDiscountsFileList',
            (changedEventArgs.rowData.sequential-1),
            {
                approved: changedEventArgs.rowData.approved
            }
        );
    }else{
        api.grid.updateRow(
            'CompaniesDiscountsFileList',
            (tmpseq-1),
            {
                approved: changedEventArgs.rowData.approved
            }
        );
    }
};