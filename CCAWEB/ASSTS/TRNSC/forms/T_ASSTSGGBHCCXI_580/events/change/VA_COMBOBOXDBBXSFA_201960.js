//Entity: CompaniesDiscountsFileList
//CompaniesDiscountsFileList.approved (CheckBox) View: CompaniesDiscountsCreateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_COMBOBOXDBBXSFA_201960 = function(  entities, changedEventArgs ) {
    changedEventArgs.commons.execServer = false;
    var api = changedEventArgs.commons.api
    var tmpseq = changedEventArgs.rowData.sequential;
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