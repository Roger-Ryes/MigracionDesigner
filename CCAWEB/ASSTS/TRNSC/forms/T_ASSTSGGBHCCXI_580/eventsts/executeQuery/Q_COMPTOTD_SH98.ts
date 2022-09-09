
//CompaniesDiscountsListQuery Entity: CompaniesDiscountsList
task_executeQuery_Q_COMPTOTD_SH98 = (executeQueryEventArgs: CobisModelExecuteQueryEventArgs) => {
    let executeServer: any = false;
    if (executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company) {
        executeQueryEventArgs.parameters.institution = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.company;    
        executeQueryEventArgs.parameters.batchId = executeQueryEventArgs.commons.api.vc.model.CompaniesBatch.sequential;
        executeServer = true;
    }
    executeQueryEventArgs.commons.execServer = executeServer;
    //executeQueryEventArgs.commons.serverParameters.CompaniesDiscountsList = true;
};