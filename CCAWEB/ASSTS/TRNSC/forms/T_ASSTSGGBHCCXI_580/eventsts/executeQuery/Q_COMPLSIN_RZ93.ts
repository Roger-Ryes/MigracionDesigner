
//CompaniesDiscountsFileListQuery Entity: CompaniesDiscountsFileList
task_executeQuery_Q_COMPLSIN_RZ93 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.statusId > 1 &&
        executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
        executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;
        executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
        executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsFileList = true;
};