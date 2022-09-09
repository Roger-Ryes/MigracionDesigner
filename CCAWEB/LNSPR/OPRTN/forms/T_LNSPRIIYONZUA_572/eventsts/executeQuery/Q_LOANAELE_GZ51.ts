
//LoanSaleHeaderEntityQuery Entity: LoanSaleHeaderEntity
task_executeQuery_Q_LOANAELE_GZ51 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let viewState: any = executeQueryEventArgs.commons.api.viewState;
    uploadedFile = false;
    viewState.disable('VA_6427AZGDIHWLKXG_205584'); //cargar archivo
    viewState.hide('CM_TLNSPRII_6S6'); //boton guardar

    executeQueryEventArgs.parameters.company = executeQueryEventArgs.commons.api.vc.model.LoanSaleFilter.company;

    //Paginación
    executeQueryEventArgs.parameters.pagSec = 0;

    executeQueryEventArgs.commons.api.grid.setAppendRecordsParams('QV_PT51_RHB11', ['sequential'], executeQueryEventArgs);
    if (executeQueryEventArgs.config?.appendRecords) {
        executeQueryEventArgs.parameters.pagSec = executeQueryEventArgs.parameters.sequential;
    }
    executeQueryEventArgs.commons.execServer = true;
};